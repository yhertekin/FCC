# Free Code Camp - Request Header Parser Microservice

This is a solution to the [Request Header Parser Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice).

## Table of contents

- [Overview](#overview)
  - [Tests](#tests)
  - [Usage](#usage)
    - [Get Request](#get-timestamp)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### Tests

- A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.
- A request to /api/whoami should return a JSON object with your preferred language in the language key.
- A request to /api/whoami should return a JSON object with your software in the software key.

### Usage

#### Get Request

##### Request

```js
GET / api / whoami;
```

##### Response

```json
{
	"ipaddress": "159.20.14.100",
	"language": "en-US,en;q=0.5",
	"software": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```

### Links

- Solution URL: [Code](https://github.com/yhertekin/FCC/tree/main/Backend%20Development%20and%20APIs/RequestHeaderParserMicroservice)

## My process

### Built with

- Node.js
- Express.js
