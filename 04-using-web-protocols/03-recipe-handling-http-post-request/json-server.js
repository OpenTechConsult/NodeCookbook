import { createServer, STATUS_CODES } from 'node:http'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

// create a reference to _public/form.html_
const form = readFileSync(join(dirname(""), "public", "form.html"))

// setup the server
createServer((req, res) => {

    if (req.method === 'GET') {
        get(res)
        return
    }

    if (req.method === 'POST') {
        post(req, res)
        return
    }

    error(405, res)
}).listen(3000, () => {
    console.log(`Server started and listening on port 3000`)
})

// create a function named "get()" that returns the form
function get(res) {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(form)
}

// post() function
function post(req, res) {
    if (req.headers["content-type"] !== "application/json") {
        error(415, res)
        return
    }

    let input = ''

    req.on('data', (chunk) => {
        input += chunk.toString()
    })

    req.on('end', () => {
        const parsed = JSON.parse(input)
        if (parsed.err) {
            error(400, "Bad request", res)
            return
        }
        console.log("Received data:", parsed)
        res.end('{"data": ' + input + "}")
    })
}

// create an error function that handles the errors.
function error(code, res) {
    res.statusCode = code
    res.end(STATUS_CODES[code])
}