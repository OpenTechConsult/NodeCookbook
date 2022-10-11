# Developing Node.js Modules

One of the main attractions to Node.js is the massive ecosystem of external third-party libraries. Node.js **modules** are **libraries** or a set of functions you want to include in your application. Most **modules** will provide an **API** to expose their functionality.

The **npm registry** is where most Node.js modules are stored, where there are over a million Node.js modules.

This project will first cover how to consume existing Node.js modules from **npm** registry for use within our applications using the **npm** command-line interface.

Later in the project, we'll learn how to develop and publish your own Node.js module to the **npm** registry.

There will also be an introduction to using the newer **ECMAScript** modules syntax, that is available in newer versions of Node.js.

We will cover the following features:

- consuming Node.js modules
- Setting up your own module
- Implementing your module
- Preparing and publishing your module to npm
- Using ECMAScript modules

## Technical Requirements

This project will require us to have Node.js installed. Preferably the most recent **Node.js 16** release. You should also have the **npm** command-line interface installed, which comes bundle with Node.js. Both **node** and **npm** should be in our path.

_**IMPORTANT NOTE**_

_It is recommended to install Node.js with **Node Version Manager(nvm)** It is a tool that enables you to switch between different versions of Node.js on most Unix-like platforms._

You can confirm which version of Node.js and npm are installed by typing the following command into the Terminal:

> **$ node --version**

> v16.17.0

> **$ npm --version**

> 8.15.0

**npm** is the default package manager bundled with Node.js, and we'll be using the bundle **npm** ClI in this chapter to install and publish modules.

_**IMPORTANT NOTE**_

_**npm** is the name of the Command-Line Interface tool(CLI) bundle with Node.js as the default package manager. npm, inc is also the name of the company that own the public registry [https://registry.npmjs.org/](https://registry.npmjs.org/)_

Note that as we'll be downloading and publishing module to the npm registry, this project will require internet access.
