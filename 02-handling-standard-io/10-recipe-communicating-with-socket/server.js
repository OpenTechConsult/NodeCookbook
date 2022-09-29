import { createServer } from 'node:net'

const HOSTNAME = 'localhost'
const PORT = '3000'

// create the server, passing in the HOSTNAME and PORT variables into listen() 
// function.
createServer((socket) => {
    console.log('Client connected')
    socket.on('data', (name) => {
        socket.write(`Hello ${name}!`)
    })
}).listen(PORT, HOSTNAME)