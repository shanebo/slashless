# Slashless

Middleware for Dylan which redirects trailing slash requests.

## Install

`npm install @dylan/slashless`

## Usage

``` js
const dylan = require('dylan');
const slashless = require('@dylan/slashless');
const app = dylan();

app.use(slashless());
```

`/foo/` redirects to `/foo`.
