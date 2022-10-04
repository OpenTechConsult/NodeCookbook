import { createServer } from 'node:http'

// define the host and port for the server
const HOSTNAME = process.env.HOSTNAME || '0.0.0.0'
const PORT = process.env.PORT || 3000

// create the server and add some routes handling
const server = createServer((req, res) => {
    if (req.method !== 'GET') {
        return error(res, 405)
    }

    if (req.url === '/todo') {
        return todo(res)
    }

    if (req.url === '/') {
        return index(res)
    }

    error(res, 404)
})

// create our error function
function error(res, code) {
    res.statusCode = code
    res.end(`{"error": "${http.STATUS_CODES[code]}"}`)
}

// create Todo function. It will just return a static JSON string 
// representing an item on the Todo list.
function todo(res) {
    res.end('[{"task_id": 1, "description": "walk dog"}]')
}

// create the index() function.
// it will be called when we perform GET request on "/" route.
function index(res) {
    res.end('{"name": "todo-server"}')
}

// call the listen() function on our server
// pass a callback to it to log out the address that the server.
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server listening on port ${server.address().port}`)
})