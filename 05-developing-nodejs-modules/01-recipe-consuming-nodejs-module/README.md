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

## How it works

The project made use of both **npm**, the command-line interface bundle with Node.js, and the **npm** public registry to download the third-party module, **express**.

The first command of the project was **$ npm init**. This command initializes a new project in the current working directory. By default, running this command will open up a CLI utility that will ask for some properties about our project. The following table defines each of the requested properties:


| Property       | Definition                                                                                            |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| package name   | The name of the project                                                                               |
| version        | The initial version of the project. Follow semantic versioning (sermver) The inial value is **1.O.0** |
| description    | The description of our project                                                                        |
| git repository | The location of our project's source code.                                                            |
| keywords       | Keywords related to the project.                                                                      |
| author         | Names of the author(s) of the project.                                                                |
| license        | The license you wish to license your code under                                                       |

The only required property are the package name and version. It is possible to skip CLI utility and accept all defaults by typing the following:

> **$ npm init --yes**

It is also possible to configure default answers using the **npm config** command. This can be achieved with the following command:

> **$ npm config set init.author.name "Our name"**

Once the **$ npm init** command completes, the utility will generate a **package.json** file in our current working directory. The **package.json** file does the follow:

- lists the packages that our project depends on, acting as a blueprint or set the instructions to which dependencies need to be installed.
- allows us to specify the versions of a package that our project can use in semantic versioning rules
- makes our build reproducible, and therefore much easier to share with other developers.

In the next step of the project, we used the **$ npm install express** command to install the **express** module. The command reaches out to the **npm** registry to download the latest version of the module with the name identifier, **express**

_**IMPORTANT NOTE**_

_By default, when passed a name, the **npm install** command will look for a module with that name and download it from the **public npm registry**. But it is also possible to pass the **npm install** command other parameters, such as a GitHub URL, and the command will install the content of the URL_

When the **install** command completes, it will put the module contents into a **node_modules** directory. If there isn't one in the current directory, but the package.json file, the command will also creates a **node_modules** directory.

If you look at the contents of the **node_modules** directory, you will notice that more than just the **express** module is present. This is because the **express** module has its own dependencies, and their dependencies may also have their own dependencies.

When installing a module, you're potentially installing a whole tree of modules. The following output shows the structure of a **node_modules** directory:

```bash
root:01-recipe-consuming-nodejs-module (main*) $ ls node_modules/
accepts             cookie-signature    express             http-errors         mime-db             proxy-addr          setprototypeof
array-flatten       debug               finalhandler        iconv-lite          mime-types          qs                  side-channel
body-parser         depd                forwarded           inherits            ms                  range-parser        statuses
bytes               destroy             fresh               ipaddr.js           negotiator          raw-body            toidentifier
call-bind           ee-first            function-bind       media-typer         object-inspect      safe-buffer         type-is
content-disposition encodeurl           get-intrinsic       merge-descriptors   on-finished         safer-buffer        unpipe
content-type        escape-html         has                 methods             parseurl            send                utils-merge
cookie              etag                has-symbols         mime                path-to-regexp      serve-static        vary
```

We can also use the **$ npm list** command to list the contents of our **node_modules** directory.

We also notice that a **package-lock.json** file has been created. **package-lock.json** files were introduced in **npm** version 5.

The difference between **package-lock.json** and **package.json** is that a **package-lock** file defines the specific versions of all of the modules in the **node_modules** tree.

Due to the way dependencies are installed, it is possible that two developers with the same **package.json** files experience different result when running **$ npm install**. This is mainly due to the fact that a **package.json** file can specify acceptable module ranges.

For example, in our application, we installed the latest version **express**, and this result in the following range.

> "express": "^4.18.2"

^ indicates that it will allow all versions above **v4.17.1** to be installed, but not **v5.x.x**. If **v4.17.2** was to be released in the time between when developerA and B run **$ npm install** command, then it is likely that developer A will get version v4.17.1 and developer B will get version v4.17.2.

If the **package-lock.json** file is shares between the developers, they will be guaranteed the installation of the same versions of all the dependencies of **express**.

In the final step of the project, we imported the **express** module to test whether it was accessible

```js
const express = require('express')
```

Note that this is the same way in which we import **Node.js core modules**. The module loading algorithm will first check to see whether you're requiring core Node.js module; it will then look in the **node_modules** directory to find the module with that name.

It is also possible to require specific files by passing  a relative path such as the following:

```js
const file = require('./file.js')
```

## There's more

Now that we've learned a bit about consuming Node.js modules, we're going to take a look at development dependencies, global modules, and the considerations you should take when consuming Node.js modules.

### Development dependencies

In **package.json**, we distinguish between **development dependencies** and regular **dependencies**. Development dependencies are typically used for tooling that supports us in developing your application.

Development dependencies should not be required to run our application. Having a distinction between dependencies that are required for our application to run and dependencies that are required to develop our application is particularly useful when it comes to deploying our application. Our production application deployment can omit the development dependencies, which makes the resulting production application much smaller. Smaller deployments reduce the cost of deployment.

A very common use of development dependencies is for linters and formatters. **prettier** is a tool that reformats code consistently. For a much more customizable linter, we should consider using **eslint**

To save a development dependency, we need to supply the install command  with the **--save-dev** parameter. For example to install prettier, we can use the following:

> **$ npm install --save-dev --save-exact prettier**

**--save-exact** pins the exact version in your **package.json** file. This is recommended when using **prettier** as patch releases may introduce new styles rules which when automatically picked up could be troublesome.

Observe that there is a separate section for development dependencies that have been added in **package.json**.

```json
{
  "name": "01-recipe-consuming-nodejs-module",
  "version": "1.0.0",
  "description": "In this application, we are going to learn how to consume npm modules from the the public **npm** registry using the **npm** CLI.",
  "main": "require-express.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Elom Atsou Agboka <opentech.consult@gmail.com> (https://github.com/OpenTechConsult)",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "prettier": "^2.7.1"
  }
}
```

You can then execute the installed **prettier** binary with the following command:

> ./node_modules/prettier/bin-prettier.js


