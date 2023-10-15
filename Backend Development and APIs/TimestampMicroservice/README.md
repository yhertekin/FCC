# Free Code Camp - Timestamp Microservice

This is a solution to the [Timestamp Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice).

## Table of contents

- [Overview](#overview)
  - [Tests](#tests)
  - [Usage](#usage)
    - [Get Timestamp](#get-timestamp)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### Tests

- A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
- A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
- A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
- Your project can handle dates that can be successfully parsed by new Date(date_string)
- If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" }
- An empty date parameter should return the current time in a JSON object with a unix key
- An empty date parameter should return the current time in a JSON object with a utc key

### Usage

#### Get Timestamp

##### Request

```js
GET / api/:date?
```

##### Responce

```json
{
	"unix": 1451001600000,
	"utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

##### Invalid

```json
{
	"error": "Invalid Date"
}
```

### Links

- Solution URL: [Code](https://github.com/yhertekin/FCC/tree/main/Backend%20Development%20and%20APIs/TimestampMicroservice)

## My process

### Built with

- Node.js
