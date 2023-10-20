# Free Code Camp - Exercise Tracker

This is a solution to the [Exercise Tracker](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker).

## Table of contents

- [Overview](#overview)
  - [Tests](#tests)
  - [Usage](#usage)
    - [Create User](#create-user)
    - [Get Users](#get-users)
    - [Create Exercise](#create-exercise)
    - [Get Logs](#get-logs)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### Tests

- You can POST to /api/users with form data username to create a new user.
- The returned response from POST /api/users with form data username will be an object with username and \_id properties.
- You can make a GET request to /api/users to get a list of all users.
- The GET request to /api/users returns an array.
- Each element in the array returned from GET /api/users is an object literal containing a user's username and \_id.
- You can POST to /api/users/:\_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.
- The response returned from POST /api/users/:\_id/exercises will be the user object with the exercise fields added.
- You can make a GET request to /api/users/:\_id/logs to retrieve a full exercise log of any user.
- A request to a user's log GET /api/users/:\_id/logs returns a user object with a count property representing the number of exercises that belong to that user.
- A GET request to /api/users/:\_id/logs will return the user object with a log array of all the exercises added.
- Each item in the log array that is returned from GET /api/users/:\_id/logs is an object that should have a description, duration, and date properties.
- The description property of any object in the log array that is returned from GET /api/users/:\_id/logs should be a string.
- The duration property of any object in the log array that is returned from GET /api/users/:\_id/logs should be a number.
- The date property of any object in the log array that is returned from GET /api/users/:\_id/logs should be a string. Use the dateString format of the Date API.
- You can add from, to and limit parameters to a GET /api/users/:\_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.

### Usage

### Create User

##### Request

```js
POST / api / users;
```

```json
{
	"username": "John Doe"
}
```

##### Response

```json
{
	"username": "John Doe",
	"_id": "5fb5853f734231456ccb3b05"
}
```

### Get Users

##### Request

```js
GET / api / users;
```

##### Response

```json
[
	{
		"_id": "5fb5853f734231456ccb3b05",
		"username": "John Doe"
	},
	{
		"_id": "09881239810889456ccb3b05",
		"username": "Jane Doe"
	}
]
```

### Create Exercise

##### Request

```js
POST / api / users/:_id/exercises;
```

```json
{
	"description": "Running",
	"duration": 2,
	"date": "2023-10-20"
}
```

##### Response

```json
{
	"_id": "5fb5853f734231456ccb3b05",
	"username": "John Doe",
	"description": "Running",
	"duration": 2,
	"date": "2023-10-20"
}
```

### Get Logs

##### Request

```js
GET / api / users/:_id/logs;
```

##### Response

```json
{
	"username": "John Doe",
	"count": 1,
	"_id": "5fb5853f734231456ccb3b05",
	"log": [
		{
			"description": "Running",
			"duration": 60,
			"date": "Mon Jan 01 1990"
		}
	]
}
```

##### Request

```js
GET / api / users/:_id/logs;
```

```json
{
	"from": "2023-10-20",
	"to": "1980-10-20",
	"limit": 2
}
```

##### Response

```json
{
	"username": "John Doe",
	"count": 2,
	"_id": "5fb5853f734231456ccb3b05",
	"log": [
		{
			"description": "Running",
			"duration": 60,
			"date": "Mon Jan 01 1990"
		},
		{
			"description": "Running",
			"duration": 30,
			"date": "Tue Jan 01 2000"
		}
	]
}
```

### Links

- Solution URL: [Code](https://github.com/yhertekin/FCC/tree/main/Backend%20Development%20and%20APIs/ExerciseTracker)

## My process

### Built with

- Node.js
- Express.js
