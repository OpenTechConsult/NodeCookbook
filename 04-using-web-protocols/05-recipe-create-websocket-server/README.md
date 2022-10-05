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