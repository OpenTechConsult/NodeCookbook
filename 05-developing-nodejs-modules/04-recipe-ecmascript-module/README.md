# 04-recipe-ecmascript-module

## Getting Ready

ECMAScript module support is enabled by default in Node.js version greater than v13.2.0 although it is still considered experimental. Note that as the ECMAScript modules implementation is both experimental and under active development, you can expect there to be a significant differences in behavior across Node.js versions. Ensure you're using Node.js 14

To get started, let's create a directory to work in:

> $ mkdir 04-recipe-ecmascript-module

> $ cd 04-recipe-ecmascript-module

## How to do it?

In this project, we'll be learning how to import and export ECMAScript modules in Node.js:

1. First let's initialize a new project:

    > **$ npm init --yes**

2. Now let's install **express**

    > **$ npm install express**

3. We'll create an server file with the **.mjs** extension rather than the **.js**

    > **$ touch server.mjs**

4. Add the following line to import the module. Note that we are not using **require** syntax:

    `import express from 'express'`

5. Now, let's set up a simple server with one route using **express**. Let's add the following lines to our **server.js** file:

    ```js
        const PORT = 3000
        const app = express()
        app.get('/', (req, res, next) => {
            res.send("Hello from Express!")
        })
        app.listen(PORT, () => {
            console.log("Express server started on port ", PORT)
        })
    ```

6. Now, we can run our **server.mjs** file using the following:

    ```bash
        $ node server.mjs
        (node:39410) ExperimentalWarning: The ESM module loader is experimental.
        Express server started on port 3000
    ```

7. Navigate to [http://localhost:3000](http://localhost:3000) in a browser of your choice to confirm the server is working.

8. Now, let's have a go at creating our own module and importing it into our express server. Create a new directory called **get-name** under the current directory:

    > **$ mkdir get-name**

    > **$ cd get-name**

9. Let's create a file inside **get-name** called **index.mjs**

    > **$ touch index.mjs**

10. In index.mjs, add the following line to export a variable:

    ```js
        export const name = 'Sandro'
    ```

11. Now, we can go back to our **server.mjs** and import the module we just created with the following:

    ```js
        import { name } from './get-name/index.mjs'
    ```

12. Let's also change **Hello from Express** to **Hello from {name}!**

    ```js
        app.get('/', (req, res) => {
            res.send(`Hello from ${name}!)
        })
    ```

13. Now we can run **server.mjs** and check that we're successfully consuming our **get-name** module:

    > **$ node server.mjs**

14. You can confirm it works using **CURL** on [http://localhost:3000](http://localhost:3000). Alternatively, we could navigate to this URL using our browser:

    ```bash
        $ curl https://localhost:3000
        Hello from Beth
    ```

We've successfully used ECMAScript module import and export syntax using **.mjs** files.
