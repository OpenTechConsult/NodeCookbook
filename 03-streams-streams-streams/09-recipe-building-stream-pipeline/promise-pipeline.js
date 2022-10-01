import { createReadStream, createWriteStream } from 'node:fs'
import { Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'
// import { promisify } from 'util'

// call promisify on the pipeline() method

//add a transform stream
const upperCase = new Transform({
    transform(chunk, encoding, cb) {
        // data processing 
        cb(null, chunk.toString().toUpperCase())
    }
})

// as we'll be awaiting pipeline(), we need to wrap the pipeline() logic in an asynchronous  function.
async function run() {
    await pipeline(
        createReadStream('./file.txt'),
        upperCase,
        createWriteStream('./newFile2.txt')
    )
    console.log('Pipeline succeeded.')
}

// call the run function and catch  the errors
run().catch(error => console.error('Pipeline failed: ' + error))