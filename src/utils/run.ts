import { spawn } from 'child_process'
import { root } from './root.js'

export const run = (cmd: string) =>
  new Promise<void>((resolve, reject) => {
    const res = spawn(cmd, {
      shell: true,
      cwd: root
    })

    res.stdout.on('data', (data) => console.log(data.toString()))
    res.stderr.on('data', (data) => console.error(data.toString()))

    res.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Command '${cmd}' exited with code ${code}`))
      } else {
        resolve()
      }
    })
  })
