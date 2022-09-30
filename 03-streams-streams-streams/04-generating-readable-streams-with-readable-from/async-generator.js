import { Readable } from 'node:stream'

// define an async generator function.
// will form the content (source) of the readable stream.
async function* generate() {
    yield 'Node.js'
    yield 'is'
    yield 'a'
    yield 'JavaScript'
    yield 'Runtime'
}

// create the readable stream using the Readable.from() method.
// passing our generate() function as argument.
const readable = Readable.from(generate())

// register a data event handler to output the content of the readable stream.
readable.on('data', (chunk) => {
    console.log(chunk)
})