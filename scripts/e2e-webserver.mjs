import http from 'node:http'
import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const nextBin = require.resolve('next/dist/bin/next')

const webhookPort = 4010
const appPort = 3000

const webhookServer = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.resume()
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ ok: true }))
    })
    return
  }

  res.writeHead(404)
  res.end()
})

await new Promise((resolve) => webhookServer.listen(webhookPort, '127.0.0.1', resolve))

const child = spawn(
  process.execPath,
  [nextBin, 'start', '-H', '127.0.0.1', '-p', String(appPort)],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      CONTACT_WEBHOOK_URL: `http://127.0.0.1:${webhookPort}/contact`,
      PORT: String(appPort),
    },
  },
)

const shutdown = () => {
  child.kill('SIGTERM')
  webhookServer.close()
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

child.on('exit', (code) => {
  webhookServer.close()
  process.exit(code ?? 0)
})
