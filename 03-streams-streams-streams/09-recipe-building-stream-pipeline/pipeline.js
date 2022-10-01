import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline, Transform } from 'node:stream'

// create a transform stream that convert input into uppercase
const uppercase = new Transform({
    transform(chunk, encoding, cb) {
        // data processing
        cb(null, chunk.toString().toUpperCase())
    }
})

// let create the pipeline
pipeline(
    createReadStream('./file.txt'),
    uppercase,
    createWriteStream('./newFile.txt'),
    (err) => {
        if (err) {
            console.log('Pipeline failed.', err)
        } else {
            console.log('Pipeline succeeded.');
        }
    }
)