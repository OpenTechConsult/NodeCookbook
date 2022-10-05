import { readFileSync } from 'node:fs'
import { createServer, STATUS_CODES } from 'node:http'
import { dirname, join } from 'node:path'
import formidable from 'formidable'

const form = readFileSync(join(dirname('.'), 'public', 'form.html'))

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
    console.log('Server started and listening on port 3000')
})

// create the get function
function get(res) {
    res.writeHead(200, {
        "Content-Type": "text/html",
    })
    res.end(form)
}

function error(code, res) {
    res.statusCode = code
    res.end(STATUS_CODES[code])
}

// add the post function to handle file upload.
function post(req, res) {
    if (!/multipart\/form-data/.test(req.headers["content-type"])) {
        error(405, res)
        return
    }

    const form = formidable({
        multiple: true,
        uploadDir: './uploads'
    })

    form.parse(req, (err, fields, files) => {
        if (err) return err
        res.writeHead(200, {
            "Content-Type": "application/json",
        })

        res.end(JSON.stringify({ fields, files, }))

    })
}

