# Consuming Node.js modules

In this application, we are going to learn how to consume npm modules from the the public **npm** registry using the **npm** CLI.

_**IMPORTANT NOTE**_

_**yarn** is a popular alternative package manager for JavaScript and was created as an alternative to the **npm** CLI in 2016. When **yarn** was released, **npm** didn't have the **package-lock.json** feature to guarantee consistency of which specific versions of modules would be installed. This was one of the key features of yarn. At the time of writing, **yarn** CLI offers a similar user experience to what the **npm** CLI provides. **Yarn** maintains a registry that is a reverse proxy to the npm registry._

## Getting Ready

To get stared, we first need to create a directory to work in:

> $ mkdir 01-recipe-consuming-nodejs-module

> $ cd 01-recipe-consuming-nodejs-module

We will also need a file where we can attempt to execute the imported module:

> $ touch require-express.js

## How to do it

In this application, we are going to set up a project and install **express** module, the most downloaded web framework for Node.js

1. First, we'll need to initialize a new project
    > npm init -y
2. We'll need to step through the utility answering the questions in the command-line utility. If we are ensure, we can just hit _Enter_ to accept the defaults.
3. The **$ npm init** command should have generated a package.json file in our project root directory.

    ```json
    {
        "name": "01-recipe-consuming-nodejs-module",
        "description": "",
        "version": "1.0.0",
        "main": "require-express.js",
        "script": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC",
    }
    ```

4. Now we can install our module. To install the **express** module, type the following command while in the root directory of the project:
    > $ npm install express
5. If we look at the **package.json** file again, we should see that the module has been added to a **dependencies** field.

    ```json
    {
        "name": "01-recipe-consuming-nodejs-module",
        "description": "",
        "version": "1.0.0",
        "main": "require-express.js",
        "script": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
            "express": "^4.18.2"
        }
    }
    ```

    We also observe that a **node_modules** directory and a **package-lock.json** file have now been created in our project directory.

6. Now, we can open up our **require-express.js** file. We only need to add the following line to test whether we can import and use the module.

   ```js
    const express = require('express')
    ```

7. It is expected that the program executes and immediately terminates after requiring the **express** module. Should the module not have been installed successfully, we would have seen an error similar to the following

    ```bash
    $ node require-express.js
    node:internal/modules/cjs/loader:959
    throw err;
     ^
     Error: Cannot find module 'express'
    ```

Now we've successfully downloaded a third-party module from the **npm** registry and imported it into our application so that we can use it.
