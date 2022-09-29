import { watchFile } from 'node:fs'
import moment from 'moment'


const file = './file.txt'
const time = moment().format('MMMM-Do-YYYY, h:mm:ss a')
watchFile(file, (current, previous) => {
    return console.log(`${file} updated ${time}`)
})