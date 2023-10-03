import {
  CfnOutput,
  Duration,
  Stack,
  StackProps,
  aws_certificatemanager,
  aws_cloudfront,
  aws_cloudfront_origins,
  aws_lambda
} from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { certificateArn, domainName, memorySize } from './params.js'

export class CDKStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const edge = new aws_cloudfront.experimental.EdgeFunction(this, 'Edge', {
      code: aws_lambda.Code.fromAsset('edge'),
      handler: 'index.handler',
      runtime: aws_lambda.Runtime.NODEJS_18_X,
      timeout: Duration.seconds(30),
      memorySize
    })

    const cdn = new aws_cloudfront.Distribution(this, 'CloudFront', {
      domainNames: domainName ? [domainName] : undefined,
      certificate: certificateArn
        ? aws_certificatemanager.Certificate.fromCertificateArn(
            this,
            'CertificateManagerCertificate',
            certificateArn
          )
        : undefined,
      defaultBehavior: {
        viewerProtocolPolicy:
          aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        originRequestPolicy:
          aws_cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
        origin: new aws_cloudfront_origins.HttpOrigin('https://example.com'),
        cachePolicy: aws_cloudfront.CachePolicy.CACHING_DISABLED,
        allowedMethods: aws_cloudfront.AllowedMethods.ALLOW_ALL,
        edgeLambdas: [
          {
            functionVersion: edge,
            eventType: aws_cloudfront.LambdaEdgeEventType.ORIGIN_REQUEST,
            includeBody: true
          }
        ]
      },
      httpVersion: aws_cloudfront.HttpVersion.HTTP2_AND_3
    })

    new CfnOutput(this, 'API URL', {
      description: 'API URL',
      value: `https://${cdn.distributionDomainName}`
    })
  }
}
