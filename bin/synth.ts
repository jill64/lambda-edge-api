import { App } from 'aws-cdk-lib'
import { CDKStack } from './cdk-stack.js'
import { stackName } from './params.js'

const app = new App()
new CDKStack(app, stackName, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
})
