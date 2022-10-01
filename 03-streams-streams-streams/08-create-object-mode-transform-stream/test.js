import { createReadStream } from 'node:fs'
import ndjson from 'ndjson'

const stream = ndjson.stringify()
stream.on('data', (line) => {
    console.log(line)
})

stream.write({ "boo": "bar" })
stream.end()

createReadStream('./data.txt')
    .pipe(ndjson.parse())
    .on('data', (obj) => {
        console.log(obj)
    })


