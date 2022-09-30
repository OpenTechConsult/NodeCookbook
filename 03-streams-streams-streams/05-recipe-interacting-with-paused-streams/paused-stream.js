import { createReadStream } from "node:fs"

// create a readable stream to read the file.txt using createReadStream()
const readStream = createReadStream('./file.txt')

// register a readable event handler on the readable stream.
readStream.on('readable', () => {
    // add manual logic to read data chunks within this handler.
    let data = readStream.read()
    while (data !== null) {
        console.log('Read chunk:', data)
        data = readStream.read()
    }
})

// register an "end" event handler on the readable stream that will print "no more data"
readStream.on('end', () => {
    console.log('No more data')
})
