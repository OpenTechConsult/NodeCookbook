import { readFile, writeFile } from 'node:fs'
import { join } from 'node:path'

const filePath = join(process.cwd(), "hello.txt")
readFile(filePath, "utf8", (err, contents) => {
    if (err) {
        return console.error(err)
    }
    console.log('File contents:', contents)
    const upperContents = contents.toUpperCase()
    updateFile(filePath, upperContents)
})

function updateFile(filepath, contents) {
    writeFile(filepath, contents, (err) => {
        if (err) {
            throw err
        }
        console.log('File updated')
    })
}