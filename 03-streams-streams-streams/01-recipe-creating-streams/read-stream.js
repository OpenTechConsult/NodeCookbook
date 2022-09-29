import { createReadStream } from 'node:fs'

const readStream = createReadStream('./file.txt')

readStream.on('data', (data) => {
    console.log('Read chunk:', data.toString())
})

readStream.on('end', () => {
    console.log('No more data to read')
})