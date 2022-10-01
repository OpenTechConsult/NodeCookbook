import { Transform } from 'node:stream'
import { stringify } from 'ndjson'

// create a transform stream specifying { objectMode: true }
const Name = new Transform({
    objectMode: true,
    transform: ({ forename, surname }, encoding, callback) => {
        callback(null, { name: forename + " " + surname })
    }
})

// create our chain of stream
Name.pipe(stringify()).pipe(process.stdout)

Name.write({ forename: 'John', surname: 'Doe' })
Name.write({ forename: 'Jane', surname: 'Doe' })