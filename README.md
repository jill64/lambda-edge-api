<!----- BEGIN GHOST DOCS HEADER ----->

# lambda-edge-api

<!----- BEGIN GHOST DOCS BADGES -----><a href="https://npmjs.com/package/lambda-edge-api"><img src="https://img.shields.io/npm/v/lambda-edge-api" alt="npm-version" /></a> <a href="https://npmjs.com/package/lambda-edge-api"><img src="https://img.shields.io/npm/l/lambda-edge-api" alt="npm-license" /></a> <a href="https://npmjs.com/package/lambda-edge-api"><img src="https://img.shields.io/npm/dm/lambda-edge-api" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/lambda-edge-api"><img src="https://img.shields.io/bundlephobia/min/lambda-edge-api" alt="npm-min-size" /></a> <a href="https://github.com/jill64/lambda-edge-api/actions/workflows/deploy-test.yml"><img src="https://github.com/jill64/lambda-edge-api/actions/workflows/deploy-test.yml/badge.svg" alt="deploy-test.yml" /></a><!----- END GHOST DOCS BADGES ----->

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

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

MIT

<!----- END GHOST DOCS FOOTER ----->
