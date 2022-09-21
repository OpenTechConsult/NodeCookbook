process.stdin.on('data', (data) => {
    // processing on each data event
    const name = data.toString().trim().toUpperCase()
    process.stdout.write(`Hello ${name}`)
})