import { createReadStream } from 'node:fs'

// create a readable stream to 'file.txt'
const rs = createReadStream('./file.txt')

// pipe the readable stream to process.stdout
// which return a writable stream connected to STDOUT
rs.pipe(process.stdout)