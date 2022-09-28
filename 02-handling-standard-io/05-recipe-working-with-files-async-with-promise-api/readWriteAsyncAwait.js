import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const filePath = join(process.cwd(), 'hello.txt')

async function run() {

    try {
        const contents = await readFile(filePath, 'utf8')
        console.log('File contents:', contents)
        const upperContents = contents.toUpperCase()
        await writeFile(filePath, upperContents)
    } catch (err) {
        console.error(err)
    }
}

run()