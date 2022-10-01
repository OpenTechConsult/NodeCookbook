import { get } from 'node:http'

// send a GET request to http://example.com
get('http://example.com', (res) => {
    res.pipe(process.stdout)
})

