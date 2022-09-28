import { chmodSync, constants } from 'node:fs'

const file = './file.txt'
chmodSync(file,
    constants.S_IRUSR |
    constants.S_IWUSR |
    constants.S_IRGRP |
    constants.S_IWGRP |
    constants.S_IROTH)