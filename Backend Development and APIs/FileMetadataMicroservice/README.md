# Free Code Camp - File Metadata Microservice

This is a solution to the [File Metadata Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice).

## Table of contents

- [Overview](#overview)
  - [Tests](#tests)
  - [Usage](#usage)
    - [Post File](#post-file)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### Tests

- You can submit a form that includes a file upload.
- The form file input field has the name attribute set to upfile.
- When you submit a file, you receive the file name, type, and size in bytes within the JSON response.

### Usage

### Post File

##### Request

```js
POST / api / fileanalyse;
```

##### Response

```json
{
	"name": "fileName.jpg",
	"type": "image/jpeg",
	"size": 31481
}
```

### Links

- Solution URL: [Code](https://github.com/yhertekin/FCC/tree/main/Backend%20Development%20and%20APIs/FileMetadataMicroservice)

## My process

### Built with

- Node.js
- Express.js
