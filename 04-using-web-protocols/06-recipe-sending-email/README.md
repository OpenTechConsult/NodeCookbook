# Sending an automated email using your own SMTP server

SMTP stands for Simple Mail Transfer Protocol and is a protocol for sending email.
In this application, we will be setting up an SMTP server using a third party npm module name **smtp-server**.

You probably receive several automated emails per day in your inbox. In _there'more..._ section, we will learn how we can send an email via Node.js to the SMTP server we created.

## Getting Ready

First, we create a directory named **06-recipe-sending-email** and a file named **server.js**

As we'll be using the third-party **smtp-server** module, we will need to initialize our project:

> `npm init -y`

_Important note:_
_Note that we could not name our directory for this application **smtp-server** as npm refuses to allow you to install an npm module where the project name is the same as the module name. If we had named our directory smtp-server, our npm-package.json name would have also been set to **smtp-server**, as we would not be able to install the module with the same name._

## How to do it ?

In this application, we will be creating an SMTP server that can receive email messages. We will use the **smtp-server** module to achieve this. We will

- First, start by installing the **smtp-server** module:

> **`npm install smtp-server`**

- We need to open **server.js** and import the **server-smtp** module:

> `import { SMTPServer } from 'smtp-server'`

- Next, let's define the port that our SMTP server should be accessible at:

> `const PORT = 4321`

- Next, we'll create the SMTP server object:

```js
const server = new SMTPServer({
    disabledCommands: ['STARTTLS', 'AUTH'],
    logger:true,
})
```

- We should also catch any errors. Register an error event listener function on the server object.

```js
server.on('error', (err) => {
    console.error(err)
})
```

- Finally, we can call the `listen()` function to start our SMTP server:

```js
server.listen(PORT)
```

- start the SMTP server

> `node server.js`
>
> **[2022-10-10 22:05:19] INFO  SMTP Server listening on [::]:4321**

- You can test a connection to your server by using either the nc or telnet command-line tools:

> **$ telnet localhost 4321**

> **nc -c localhost:4321**

We've now confirmed that our SMTP server is available and listening on port 4321.