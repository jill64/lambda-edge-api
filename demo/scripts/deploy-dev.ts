import { build } from '../../dist/index'

build({
  entryPoint: './src/index.ts',
  deploy: true,
  name: 'Lambda-Edge-API-Test-Dev'
})
