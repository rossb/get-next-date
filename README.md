# get-next-date

Takes a Date object and returns a Date object representing the next calendar day, set to midnight local time.

## Install

```sh
$ npm install get-next-date --save
```

## Usage

```js
const GetNextDate = require('get-next-date');

let currentTime = new Date();
let tomorrow = GetNextDate(currentTime);
```
