import { createReadStream } from 'node:fs'

const readStream = createReadStream('./file.txt');

(async () => {
    for await (const chunk of readStream) {
        console.log('Read chunk:', chunk.toString())
    }
    console.log('No more data')
})()