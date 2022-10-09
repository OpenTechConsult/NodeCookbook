# 05-recipe-create-websocket-server

WebSocket protocol enables two-way communication between a browser a server.
WebSocket are commonly leveraged for building real-time web applications, such as instant messaging client.

In this application, we are going to use the third party **ws** module to create a WebSocket server that we can interact with the via the browser.

## Getting ready

1. touch two files : **client.js** and **server.js**

> touch client.js server.js

2. For our client, create a __public__ directory containing an html file named index.html.

> mkdir public
> touch public/index.html

3. As we will be using a third party npm module, let's initialize a npm project.

> npm init -y

4. Configure the application to use the ES6 module system.

## How to do it ?

### Create the WebSocket server

**Objective**: create a WebSocket server an a client and send messages between the two.

1. installing t

> `npm i ws`

2. Import the **ws** module into server.js

> `import WebSocket from 'ws'`

3. Define our **WebSocketServer** including which port it should be accessible at.

```js
const WebSocketServer = new WebSocket.Server({
    port: 3000,
})
```

4. listen for connections and messages to the WebSocketServer

```js
WebSocketServer.on('connection', (socket) => {
    socket.on('message', (msg) => {
        console.log('Received:', msg)
        if (msg === 'Hello') {
            socket.send('World!')
        }
    })
})
```

### Create the WebSocket Client

1. Add the following to the client.js file.

```js
import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'

const index = readFileSync('public/index.html')

const server = createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.end(index)
})

server.listen(8080)
```
6. Open `index.html` and add the following

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Communicating with WebSockets</h1>
    <input id="msg"><button id="send">Send</button>
    <div id="output"></div>

    <script>
        const ws = new WebSocket('ws://localhost:3000')
        const output = document.getElementById('output')
        const send = document.getElementById('send')

        send.addEventListener('click', () => {
            const msg = document.getElementById('msg').value
            ws.send(msg)
            output.innerHTML += log('Sent', msg)
        })

        function log(event, msg) {
            return "<p>" + event + ": " + msg + "</p>"
        }

        ws.onmessage = function (e) {
            output.innerHTML += log('Received', e.data)
        }

        ws.onclose = function (e) {
            output.innerHTML += log('Disconnected', e.code)
        }
        
        ws.onerror = function (e) {
            output.innerHTML += log('Error', e.data)
        }
    </script>
</body>
</html>
```

7. Start the server in one terminal window, and the client in a second terminal window.

> **$ node server.js**
> **$ node client.js**

8. Access http://localhost:8080 in the browser. We should see a simple input box with a **submit** button. type **Hello** into the input box and click **submit**. The websocket server should respond with "World!".

Taking a look at the terminal window where the server is running, the message **Received: Hello** is displayed.
This means that the client and the server are communicating over WebSocket.

## How it work

In this application, we used the **ws** module to define a WebSocket server:

```js
import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 3000, })
```

We then register a listener for the connection event. The function passed to this listener is executed each time there is a new connection to the WebSocket.

Within the _connection_ event callback function, we registered a nested listener for the _message_ event, which gets executed each time a message is received.

For our client, we register a regular HTTP server to serve our index.html page. Our index.html contains a JavaScript code that is executed within the browser. Within the JavaScript code, we created a connection to our WebSocket server, providing the endpoint that the ws object **ws** object is listening to:

```js
let ws = new WebSocket('ws://localhost:3000')
```

To send a message to our WebSocket server, we just call **send** on the **ws** object with **ws.send(msg)**.

We wrapped the **ws.send(msg)** in an event listener. The event listener listen to the click event on the submit button, meaning that we would send the message to the WebSocket server when the submit button is clicked.

In our script in index.html, we registered event listener functions on our WebSocket, including **onmessage**, **onclose**, and **onerror** event listeners.
These functions execute on their respective events. For example, the **onmessage** event listener function would execute when our WebSocket receives a message. We use these event listeners to add output to our web page.

## There is more...

Now we've learned how we can communicate between browser and server using **WebSockets**. But it is also possible to create a WebSocket client in Node.js, enabling two Node.js programs to communicate over WebSockets using the following steps.

1. Start by creating a new file called **node-client.js** within our project root directory

> `touch node-client.js`

2. Import the **ws** module and create  a new **WebSocket** object that is configured to point the WebSocket server we created previously.

```js
import { WebSocketServer } from 'ws'
const ws = new WebSocketServer({ port: 3000, })
```

3. Now we'll setup some listeners on our sockets. We will add listeners for the close **open**, **close** and **message** events

```js
ws.on('open', () => {
    console.log('Connected')
})

ws.on('close', () => {
    console.log('Disconnected')
})

ws.on('message', (message) => {
    console.log('Received: ' + message)
})
```

4. Now let's send a message Hello to the WebSocket server every 3 seconds. We will use the `setInterval()` function to achieve this:

```js
setInterval(() => {
    ws.send('Hello')
}, 3000)
```

5. Start both the WebSocket server and your Node.js-based client in separate Terminal window.

> `node server.js`
> 
> `node node-client.js`

6. We should expect to see the server responding every 3 seconds to **Hello** message with the message **World**

> socket connected

> Received: Hello

 > Received: Hello

 > Received: Hello
