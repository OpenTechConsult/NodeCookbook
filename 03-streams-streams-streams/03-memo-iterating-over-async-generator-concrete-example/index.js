async function* streamAsyncIterable(stream) {
    const reader = stream.getReader()
    try {
        while (true) {
            const { done, value } = await reader.read()
            if (done) {
                return
            }
            yield value
        }
    } finally {
        reader.releaseLock()
    }
}

// fetch data from URL and calculates response size using the  async generator.
async function getResponseSize(url) {
    const response = fetch(url)
    // will hold the size of the response in bytes
    let responseSize = 0
    // the for await... of loop. Async iterates of each portion of the response
    for await (const chunk of streamAsyncIterable(response.body)) {
        // incrementing total response length
        responseSize += chunk.length
    }

    console.log(`Response size: ${responseSize} bytes`)
    // expected response output: "Response size: 1071472"
    return responseSize
}

getResponseSize('https://jsonplaceholder.typicode.com/photos')