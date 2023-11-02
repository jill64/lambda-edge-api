<!----- BEGIN GHOST DOCS HEADER ----->

# lambda-edge-api

[![npm-version](https://img.shields.io/npm/v/lambda-edge-api)](https://npmjs.com/package/lambda-edge-api) [![npm-license](https://img.shields.io/npm/l/lambda-edge-api)](https://npmjs.com/package/lambda-edge-api) [![npm-download-month](https://img.shields.io/npm/dm/lambda-edge-api)](https://npmjs.com/package/lambda-edge-api) [![npm-min-size](https://img.shields.io/bundlephobia/min/lambda-edge-api)](https://npmjs.com/package/lambda-edge-api) [![deploy-test.yml](https://github.com/jill64/lambda-edge-api/actions/workflows/deploy-test.yml/badge.svg)](https://github.com/jill64/lambda-edge-api/actions/workflows/deploy-test.yml)

🌐 Deploy your API to the edge using AWS-CDK



<!----- END GHOST DOCS HEADER ----->

## Install

1. Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) in local machine

2. [Configure authentication and access credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html) in AWS CLI

3. Install adapter in your project

```sh
npm i -D lambda-edge-api
```

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
