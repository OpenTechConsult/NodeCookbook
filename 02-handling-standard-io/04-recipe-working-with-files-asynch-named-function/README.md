# 04-recipe-working-with-files-asynch-named-function

Alternative of using nested callbacks using named functions.

In the previous example _"03-recipe-working-with-files-asynchronously"_ we saw how to use callback functions to work with files asynchronously. We used callback function in another callback function. This way of doing can lead to callback hell.

One way to avoid callback hell is to split the callbacks into named functions.

In this present case, we are going to rewrite the previous example _"03-recipe-working-with-files"_ so that **writeFile()** call is contained within its own named function that we will call **updateFile()**

## Run

to run the example:

> node readWriteNameFunction.js
