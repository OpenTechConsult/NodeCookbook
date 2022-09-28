import { chmodSync, constants } from 'node:fs'

const file = './file.txt'
chmodSync(file, 0o664)