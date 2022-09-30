import { createReadStream, createWriteStream } from 'node:fs'
import { Transform } from 'node:stream'

// create a readable stream to read the file.txt
const rs = createReadStream('./file.txt')

// once our file content will be processed by transform stream, we will write it to a new file called "newFile.txt".
// let's create a writable stream to write this file using createWriteStream() method.
const newFile = createWriteStream('./newFile.txt')

// start defining our transform stream. Let's name our transform stream uppercase()
const uppercase = new Transform({
    transform(chunk, encoding, callback) {
        // Data processing -- add the logic to transform the chunks into uppercase
        callback(null, chunk.toString().toUpperCase())
    }
})

// we now need to chain together all our streams using pipe()
rs.pipe(uppercase).pipe(newFile)