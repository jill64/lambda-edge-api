<!----- BEGIN GHOST DOCS HEADER ----->
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
