import { statSync } from 'node:fs'

const file = process.argv[2]

// create the printMetaData to get the file info
function printMetaData(file) {
    const fileStats = statSync(file)
    console.log(fileStats)
}

// call the printMetaData function
printMetaData(file)