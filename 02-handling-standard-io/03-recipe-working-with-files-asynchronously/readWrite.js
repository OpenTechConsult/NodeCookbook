import { readFile, writeFile } from 'node:fs'
import { join } from 'node:path'

const filePath = join(process.cwd(), "hello.txt")
readFile(filePath, "utf8", (err, contents) => {
    if (err) {
        return console.log(err)
    }
    console.log('File contents:', contents)
    const upperContents = contents.toUpperCase()
    writeFile(filePath, upperContents, (err) => {
        if (err) {
            throw err
        }
        console.log('File updated.')
    })
})