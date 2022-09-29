import { createWriteStream } from 'node:fs'

const fileStream = createWriteStream('./file.txt')

for (let i = 0; i < 1000000; i++) {
    fileStream.write('Node.js is a JavaScript runtime built on Google Chrome V8 JavaScript engine.')
}