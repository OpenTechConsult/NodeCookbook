import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'

const index = readFileSync('public/index.html')

const server = createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.end(index)
})

server.listen(8080, () => {
    console.log(`Server started,  listening on http://localhost:8080`)
})