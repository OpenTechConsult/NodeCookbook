# 04-recipe-handling-file-upload

Uploading a file to the web is a common activity. Be it an image or a video. Handling file upload is different than posting simple data on the server. Browsers embed files being uploaded into multipart messages.

Multipart messages allow multiple pieces of content to be combined into one payload.
To handle multipart messages, we need to use a multipart parser.

In this little tiny project, we will use the **formidable** module as our multipart parser to handle file upload.
