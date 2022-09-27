import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const filePath = join(process.cwd(), "hello.txt")
const contents = readFileSync(filePath, "utf8")
console.log('File contents:', contents)
const upperContents = contents.toUpperCase()
writeFileSync(filePath, upperContents)

console.log('File updated')