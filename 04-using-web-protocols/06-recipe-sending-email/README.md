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

## How it works

In the application, we have leveraged the **smtp-server** module. This module takes care of the implementation of the SMTP protocol, meaning we can focus on the logic of our program rather than lower-level implementation details.

The **smtp-server** module provides high-level APIs. In this application, we use the following to create a new SMTP server object:

```js
const server = new SMTPServer({
    disabledCommands: ['STARTTLS', 'AUTH'],
    logger: true,
})
```

The constructor of the **SMTPServer** object accepts many parameters. A full list of options that can be passed to the SMTPServer constructor is available in the nodemailer documentation at [https://nodemailer.com/extras/smtp-server](https://nodemailer.com/extras/smtp-server).

In our application, we added the **`disabledCommands:['STARTTLS', 'AUTH']`** option. This option disabled **Transport Layer Security (TLS)** support and authentication for simplicity. However, in production, it would not be recommended to disable **TLS** support and authentication. Instead, it would be recommended to enforce **TLS**. We can do this with the smtp-server module by specifying the **`secure:true`** option.

Should we wish to enforce TLS for connection, we would also need to define a **private key** and a **certificate**. If no certificate is provided, then the module will generate a self-signed certificate; however, may clients reject these certificates.

The second option we specify on the SMTPServer constructor is the **`logger: true`** option, which enables logging from our SMTP server.

To start our **`SMTPServer`**, we call the **`listen()`** function on the SMTPServer object. It is possible to pass the **`listen()`** function a port, a hostname, and a callback function. In this case, we provide the port; the hostname will default to **`localhost`**.

## There's more...

Now that we've set up a simple SMTP server, We should try sending an email to it via Node.js.

To send an email with Node.js, we can use the **nodemailer** npm module. This npm module is provided by the same organization as the **smtp-server** module used in the _Sending an automated email using your own SMTP server_ program.

1. Let's start by installing the **nodemailer** module in our root directory.

> **$ npm i nodemailer**

2. Next, we'll create a file named send-email.js

> **$ touch send-email.js**

3. The first line of code we need to add to our send-email.js to import the **nodemailer** module:

```js
import nodemailer from 'nodemailer'
```

4. Next, we need to set up a transport object. We'll configure the transport object to connect to the SMTP server we created in the _Creating an SMTP server_ application.

```js
const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 4321,
});
```

5. Next we can call the **`sendMail()`** function on the transport object:

```js
transporter.sendMail({
    from: "beth@example.com",
    to: "laddie@example.com",
    subject: "Hello",
    text: "Hello, world!",
}, (err, info) => {
    if (err) {
        console.log(err)
    }
    console.log("Message sent:", info)
    })
```

The **first parameter** to the **`sendMail()`** function is an object representing the email, including the email address of the sender and receiver, the subject line, and the text of the email.

The **second parameter** is a callback function that executes once the mail is sent.

6. To test our **send-mail.js** program, first we start the SMTP server:

> **$ node server.js**

7. In a second terminal window, we run the **send-mail.js** program:

> **$ node send-mail.js**

8. You should expect to see the following output from the server:

```bash
[2022-10-11 16:39:38] INFO  SMTP Server listening on [::]:4321
[2022-10-11 16:39:44] INFO  [#lbxhsh5mmx3u2kqn] Connection from [127.0.0.1]
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] S: 220 root.local ESMTP
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] C: EHLO root.local
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] S: 250-root.local Nice to meet you, [127.0.0.1]
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] 250-PIPELINING
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] 250-8BITMIME
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] 250 SMTPUTF8
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] C: MAIL FROM:<beth@example.com>
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] S: 250 Accepted
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] C: RCPT TO:<laddie@example.com>
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] S: 250 Accepted
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] C: DATA
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] S: 354 End data with <CR><LF>.<CR><LF>
[2022-10-11 16:39:44] INFO  <received 277 bytes>
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] C: <277 bytes of DATA>
[2022-10-11 16:39:44] DEBUG [#lbxhsh5mmx3u2kqn] S: 250 OK: message queued
[2022-10-11 16:39:44] INFO  [#lbxhsh5mmx3u2kqn] lbxhsh5mmx3u2kqn received "close" event from 127.0.0.1
[2022-10-11 16:39:44] INFO  [#lbxhsh5mmx3u2kqn] Connection closed to [127.0.0.1]
```

9. And you should see the following output from the send-mail.js program:

```bash
Message sent: {
  accepted: [ 'laddie@example.com' ],
  rejected: [],
  envelopeTime: 4,
  messageTime: 4,
  messageSize: 280,
  response: '250 OK: message queued',
  envelope: { from: 'beth@example.com', to: [ 'laddie@example.com' ] },
  messageId: '<be5a99ab-4ce4-eba3-9909-6055aaf4239a@example.com>'
}
```

This shows that we have successfully created an SMTP server, and we're able to send emails to the SMTP server from another Node.js program.
