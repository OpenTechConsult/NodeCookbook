# 09-recipe-building-stream-pipeline

Node.js core **stream** module provides a **pipeline()** method.
Similar to how we can use the Node.js core stream **pipe()** method to pipe one stream to another.
We can also use **pipeline()** to chain multiple streams together.

Pipeline() method has forwards error, making it easy to handle errors in the same stream flow.

The example is based on many of the streams concepts covers by other examples in this repo.

Here we'll create a stream pipeline using the pipeline() method.

## Run

To run the example:

> npm start

or

> node pipeline.js