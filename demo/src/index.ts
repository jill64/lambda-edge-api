import type { OriginRequestHandler } from '@jill64/types-lambda'

export const handler: OriginRequestHandler<'custom'> = async () => {
  return {
    status: '200',
    body: 'Hello, World!',
    headers: {
      'content-type': [
        {
          key: 'Content-Type',
          value: 'text/plain'
        }
      ]
    }
  }
}
