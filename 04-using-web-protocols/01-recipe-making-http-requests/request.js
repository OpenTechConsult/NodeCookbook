import { get, request } from 'node:http'

// send a GET request to http://example.com
// get('http://example.com', (res) => {
//     res.pipe(process.stdout)
// })

// data to  be send with the HTTP POST request
const payload = `{
    "name": "Beth",
    "job": "Software Engineer"
}`

const opts = {
    method: "POST",
    hostname: "postman-echo.com",
    path: "/post",
    headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload),
    },
}


// send HTTP request
const req = request(opts, (res) => {
    process.stdout.write('Status Code: ' + res.statusCode + '\n')
    process.stdout.write('Body: ')
    res.pipe(process.stdout)
})


// catch any error that occurred on the requests.
req.on('error', (err) => {
    console.error('Error: ' + err)
})

// send the request with the payload
req.end(payload)