async function* asyncGenerator() {
    let i = 0
    while (i < 3) {
        yield i++
    }
}

(async () => {
    for await (const num of asyncGenerator()) {
        console.log(num)
    }
})()