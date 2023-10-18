# Free Code Camp - URL Shortener Microservice

This is a solution to the [URL Shortener Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice).

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

- You can POST a URL to /api/shorturl and get a JSON response with original_url and short_url properties. Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}
- When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.
- If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }

### Usage

#### Get Request

##### Request

```js
POST / api / shorturl;
```

##### Response

```json
{ "original_url": "https://freeCodeCamp.org", "short_url": 1 }
```

##### Request

```js
GET / api / shorturl/:short_url;
```

##### Response

```json
redirect to original_url
```

### Links

- Solution URL: [Code]()

## My process

### Built with

- Node.js
- Express.js
