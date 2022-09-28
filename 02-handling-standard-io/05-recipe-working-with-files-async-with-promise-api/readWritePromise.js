import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const filePath = join(process.cwd(), 'hello.txt')


readFile(filePath, 'utf8')
    .then((contents) => {
        console.log('File Contents:', contents)
        writeFile(filePath, contents.toUpperCase())
            .then(() => console.log('File updated'))
    })