# Implementing you module

In this application, we're going to start writing our module code. The module we will write will expose a single API that will reverse a sentence pass to it. We'll also install a popular code formatter to keep our module code consistent.

## Getting Ready

Ensure that we create a directory for the application. In our case the application directory is **03-recipe-implementing-your-module**. Cd into that directory.

Initialize the project and ensure that the **package.json** is present in the root directory

We'll also need to create the first JavaScript file for our module.

> $ touch index.js

## How to do it

We are going to start this project by installing a popular code formatter to keep our module code styling consistent.

1. Add **prettier** as code formatter to the module.

   $ npm install --save-dev --save-exact prettier

2. In **index.js** create a function that accepts a string parameter and then reverses it

   ```js
   function reverse(sentence) {}
   ```

3. Implement the reverse functionality. The approach is to split the sentence into an array of single-word strings and then reverse the array.

   ```js
   function reverse(sentence) {
     const wordsArray = sentence.split(" ");
   }
   ```

4. Now that we have an array of the strings, to reverse the array, we call the reverse function, which is available on array objects:

   ```js
   const reversedArray = wordsArray.reverse();
   ```

5. As the words are still stored in an array format, we need to join the elements of the array back together to reform our sentence as a string. To do this we can use the **join()** function, which is available on array objects:

   ```js
   const reversedSentence = reversedArray.join(" ");
   ```

6. Now we'll want to return **reversedSentence** from the function. The function will look like:

   ```js
   function reverse(sentence) {
     const wordsArray = sentence.split(" ");
     const reversedArray = wordsArray.reverse();
     const reversedSentence = reversedArray.join(" ");
     return reversedSentence;
   }
   ```

7. Next, we'll add a key line to the top of our file that makes the reverse function accessible. To the top of our file, let's add the following

   ```js
   module.exports = reverse;
   ```

8. Now we can test that the program works from the command line with the following command:

   > $ node --print "require('./')('Hello Sandro\!')"

   > Sandro! Hello
