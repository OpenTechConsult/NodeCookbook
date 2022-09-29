import { connect } from 'node:net'

// define the HOSTNAME and PORT
const HOSTNAME = 'localhost'
const PORT = '3000'

const socket = connect(PORT, HOSTNAME)
socket.write('World')
socket.on('data', (data) => {
    console.log(data.toString())
})