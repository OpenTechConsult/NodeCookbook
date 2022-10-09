import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 3000, })

wss.on('connection', (socket) => {
    console.log('socket connected')
    socket.on('message', (msg) => {
        if (msg.toString() === 'Hello') {
            socket.send('World!')
        }
    })
})
