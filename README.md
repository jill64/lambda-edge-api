<!----- BEGIN GHOST DOCS HEADER ----->

# lambda-edge-api

[![deploy-test.yml](https://github.com/jill64/lambda-edge-api/actions/workflows/deploy-test.yml/badge.svg)](https://github.com/jill64/lambda-edge-api/actions/workflows/deploy-test.yml)

🌐 Deploy your API to the edge using AWS-CDK

<!----- END GHOST DOCS HEADER ----->

- Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) in local machine
- [Configure authentication and access credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html) in AWS CLI

## [Example Project](./demo)

## Usage

[Build Options](./src/types/BuildOptions.ts)

```js
import { build } from 'lambda-edge-api'

build({
  name: 'Lambda-Edge-API',

  // Auto Deploy
  deploy: true

  // ... BuildOptions
})
```
