const LIMIT = 3

const asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0
        return {
            next() {
                const done = i === LIMIT
                const value = done ? undefined : i++
                return Promise.resolve({ value, done })
            },
            return() {
                // This will be reached if the consumer call 'break'
                // or 'return' early in the loop.
                return { done: true }
            }
        }
    }
};

(async () => {
    for await (const num of asyncIterable) {
        console.log(num)
    }
})()