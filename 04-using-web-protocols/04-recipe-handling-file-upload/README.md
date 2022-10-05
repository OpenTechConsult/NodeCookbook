# 04-recipe-handling-file-upload

## Uploading a single file.

Uploading a file to the web is a common activity. Be it an image or a video. Handling file upload is different than posting simple data on the server. Browsers embed files being uploaded into multipart messages.

Multipart messages allow multiple pieces of content to be combined into one payload.
To handle multipart messages, we need to use a multipart parser.

In this little tiny project, we will use the **formidable** module as our multipart parser to handle file upload.

### Run

To run the application:

> npm start 

or

> node server.js

## Uploading multiple files

In some cases, you may want to upload multiple files to a server at the same time.
Conveniently, with **formidable**, this is supported by default.
We just need to make one change to our **form.html** file, which is added __multiple__ attribute to the input element.
