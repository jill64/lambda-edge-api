import type { OriginRequestHandler } from '@jill64/types-lambda'

export const handler: OriginRequestHandler<'custom'> = () => {
  return {
    status: '200',
    body: 'Hello, world!'
  }
}