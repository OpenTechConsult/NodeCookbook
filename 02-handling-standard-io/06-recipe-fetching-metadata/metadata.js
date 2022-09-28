import { statSync } from 'node:fs'

const file = process.argv[2]

// create the printMetaData to get the file info
function printMetaData(file) {
    try {
        const fileStats = statSync(file)
        console.log(fileStats)
    } catch (err) {
        console.error('Error reading the file path:', file)
    }
}

// call the printMetaData function
printMetaData(file)