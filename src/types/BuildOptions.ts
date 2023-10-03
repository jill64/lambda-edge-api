import { BuildOptions as esbuildOptions } from 'esbuild'

export type BuildOptions = {
  /**
   * Automatically deploy when build
   * @default false
   */
  deploy?: boolean

  /**
   * Path to the directory where the source code is located
   */
  entryPoint: string

  /**
   * Override esbuild options
   * @default undefined
   */
  esbuild?: esbuildOptions

  /**
   * AWS-CDK CloudFormation Stack Name
   * @default 'Lambda-Edge-API'
   */
  name?: string

  /**
   * Lambda memory size [MB]
   * @default 128
   */
  memory?: number

  /**
   * Environment variables to set in Lambda
   * @default undefined
   */
  env?: Record<string, string>

  /**
   * Custom domain of CloudFront distribution
   * @default undefined
   */
  domain?: {
    /**
     * FQDN (Full Qualified Domain Name) to set on CloudFront
     * @example 'demo.example.com'
     */
    fqdn: string

    /**
     * ARN of the SSL certificate created with AWS Certificate Manager (ACM).
     * It must be created in the us-east1 region.
     * @example 'arn:aws:acm:us-east1:<accountId>:certificate/<certificateId>'
     */
    certificateArn: string
  }
}
