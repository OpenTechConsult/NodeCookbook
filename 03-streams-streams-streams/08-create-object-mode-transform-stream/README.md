# 08-create-object-mode-transform-stream

By default Node.js streams operate on String, Buffer, or Uint8Array objects.
However, it is possible to work with Node.js streams in **object mode**.
This allows us to work with other JavaScript values except null value.
In object mode, the values returned from the stream are generic JavaScript objects.

The main difference in object mode is that the **highWaterMark** value refers to the number of objects rather than bytes as we learned in previous example.

For object mode streams, the **highWaterMark** value is set to 16 - meaning 16 objects are buffered at a time.

To set the stream in object mode, we pass **{ objectMode: true }** via the **options** object.

In this example we will demonstrate how to create a transform stream in object mode.

