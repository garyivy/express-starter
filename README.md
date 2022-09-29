# express-starter

Starter Kit for Express Api with Typescript, Unit and Integration Testing, Automatic Swagger generation and Open API validation

## To use as developer

`npm install`</br>
`npm run tsoa:gen`</br>
`npm run dev`</br>

## How does tsoa work?

It scans your controllers for annotations, interfaces, types, and comments and generates a swagger file and a file to registers routes (links app route to controller methods)

## How does open api validator work?

It compares incoming request against the swagger document and returns 400 (BAD REQUEST) for input that does not match the swagger spec
