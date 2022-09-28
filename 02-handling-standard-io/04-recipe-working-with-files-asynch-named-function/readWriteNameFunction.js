import { readFile, writeFile } from 'node:fs'
import { join } from 'node:path'

const filePath = join(process.cwd(), "hello.txt")


function updateFile(filepath, contents) {
    writeFile(filepath, contents, (err) => {
        if (err) {
            throw err
        }
        console.log('File updated')
    })
}


readFile(filePath, "utf8", (err, contents) => {
    if (err) {
        return console.error(err)
    }
    console.log('File contents:', contents)
    const upperContents = contents.toUpperCase()
    updateFile(filePath, upperContents)
})

setInterval(() => process.stdout.write('******\n'), 1).unref()
