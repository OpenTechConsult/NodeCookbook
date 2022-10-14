# Setting up our own module

In this project, we'll be scaffolding our own module, that is, will set up a typical file and directory structure for our module and learn how to initialize our project with the **npm** CLI. We'll also create a **GitHub** repository to store our module code. **GitHub** is a hosting provider that allows users to store their **Git**-based repositories, where Git is a version control system.

The module we're going to develop will expose an API that reverses tha sentence pass to it.

## Getting Ready

Let's make a new directory for our module and change into it. In our case, the directory is already created and named **02-recipe-setting-up-your-own-module**.

> $ mkdir 02-recipe-setting-up-your-own-module

Let's enter into our newly created directory

> $ cd 02-recipe-setting-up-your-own-module

This project will require us to have a **GitHub** account to publish source code and an **npm** account to publish our module.

## How to do it?

In this project, we will be using the **npm** CLI to initialize our **02-recipe-setting-up-your-own-module** module:

1. To get started, we must first initialize the new project:

    > $ npm init

2. Use _Enter_ to accept defaults. The command will have **packages.json** file created for you. Open the file and expect to see output similar to the following:

    ```json
        {
        "name": "02-recipe-setting-up-your-own-module",
        "version": "1.0.0",
        "description": "A project to show to create an npm module a publish it. The project is about creating an API that reverse any sentence pass to it",
        "main": "index.js",
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
         },
         "keywords": [
            "npm",
            "module",
            "GitHub",
            "Git"
         ],
        "author": "Elom Atsou Agboka <opentech.consult@gmail.com> (https://github.com/OpenTechConsult)",
        "license": "ISC"
        }
    ```

3. Now that we have some module code, let's create a Github repository to store our module code.

4. While we're here, it's recommended to add the default **.gitignore** file for Node.js and add a license file that matches the license field in **package.json**.

    _IMPORTANT NOTE_

    _A .gitignore file informs Git which files to omit, or ignore, in a project. Github provides a default .gitignore file per language or runtime. GitHub's default .gitignore file for Node.js is visible at [https://github.com/github/gitignore/blob/master/Node.gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore) Note that node_modules is automatically added to .gitignore. The package.json file instructs which modules need to be installed for a project and it is typically expected that each developer would run the **npm install** command on their development environment rather than have the **node_modules** directory committed to source control._

5. Run these commands in your shell from within your module directory:

    > $ echo "#02-recipe-setting-up-your-own-module" >> README.md

    > $ git init

    > $ git add README.md

    > $ git commit -m "firs commit"

    > $ git remote add origin git@github.com:<username>/#02-recipe-setting-up-your-own-module.git

    > $ git push -u origin master

6. When this is successful, we should see the following output:

    ```bash
    [master (root-commit) 11419a7] first commit
    1 file changed, 1 insertion(+)
    created mode 100644 README.md
    Enumarating objects: 3, done.
    ...
    ```

7. We can now retype **$ npm init** again and it will automatically suggest our Github remote repository for the repository field. This will update our **package.json** file's repository field to the following:

    ```json
        "repository": {
            "type": "git",
            "url": "git+https://github.com/OpenTechConsult/02-recipe-setting-up-your-own-module.git"
        },
        "bugs": {
            "url": "https://github.com/OpenTechConsult/02-recipe-setting-up-your-own-module/issues"
        },
        "homepage": "https://github.com/OpenTechConsult/02-recipe-setting-up-your-own-module#readme"
    }
    ```

Now we've seen how to use the npm CLI to initialize our 02-recipe-setting-up-your-own-module module.