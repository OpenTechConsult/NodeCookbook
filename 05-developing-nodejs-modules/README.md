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

## Global modules

It is possible to **globally install** Node.js modules. Typically, the type of modules we'll install are binaries or program that we want to be accessible in your shell. To globally install a module, we pass the **--global** command to the **install** command as follows:

> **$ npm install --global lolcatjs**

This will not install **lolcatjs** into our **node_modules** folder. Instead it will be install into the **bin** directory of our Node.js installation. To see where it was installed, we can use the **which** command.

> **$ which lolcatjs

>/Users/eagboka/.nvm/versions/node/v16.17.0/bin/lolcatjs

The **bin** directory is likely to already be in our path because that is where the **node** and **npm** binaries are stored. Therefore any executable program that is globally installed will also be made available in our shell. Now we should be able to call the **lolcatjs** module from our shell.

> $ lolcatjs --help

In **npm** version v5.2, **npm** added the **npx** command to their CLI. This command allows us to execute a global module without having it permanently stored. We could have executed the **lolcatjs** module without storing it with the following command:

> **$ npx lolcatjs**

In general npx should be sufficient for most modules that we wish to execute. However, if we want the global module to be permanently available offline, then we may wish to still globally install the module rather than using the **npx** command.

## Responsibly consuming modules

We'll likely want to leverage the Node.js module ecosystem in our own application. Modules provide solutions and implementations of common problems and tasks, so reusing existing code save us time when developing our applications.

As we see in this application, simply pulling in the web framework, **express** pulled in over 80 other modules. Pulling in this number of modules adds risk, especially if you're using these modules for production workloads.

There are many considerations we should take when choosing a Node.js module to include in our application. The following five considerations should be taken in particular:

- Security

    Can we depend on the module to fix security vulnerabilities ?$
    We will later go into more detail about how to check for known security issues in our module.

- Licenses

    If you link with open source libraries and then distribute the software, the software needs to be compliant with the licenses of the linked libraries. Licenses can vary from restrictive/protective to permissive. In GitHub, we can navigate to the license file and it will give us a basic overview of what the license permits.

- Maintenance

    We'll also need to consider how well maintained the module is. The majority of modules publish their source code to GitHub and have their bug reports viewable as GitHub issues. From viewing their issues and how/when the maintainers are responding to bug reports, we should be able to get some insight into how maintained the module is.
