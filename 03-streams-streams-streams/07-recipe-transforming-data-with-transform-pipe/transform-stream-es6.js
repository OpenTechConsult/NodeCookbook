import { createReadStream, createWriteStream } from 'node:fs'
import { Transform } from 'node:stream'

const rs = createReadStream('./file.txt')

const newFile = createWriteStream('./newFile2.txt')

class Uppercase extends Transform {
    constructor() {
        super()
    }

    _transform(chunk, encoding, cb) {
        this.push(chunk.toString().toUpperCase())
        cb()
    }
}

rs.pipe(new Uppercase()).pipe(newFile)
