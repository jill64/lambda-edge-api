import { expect, test } from 'vitest'

test('test', async () => {
  const url = process.env.PREVIEW_URL
  if (!url) throw new Error('PREVIEW_URL is not defined')
  const response = await fetch(url)
  const text = await response.text()
  expect(text).toBe('Hello World!')
})
