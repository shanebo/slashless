# Slashless

Middleware for Dylan which redirects trailing slash requests.

## Install

`npm install @dylanjs/slashless`

## Usage

``` js
const slashless = require('@dylanjs/slashless');
app.use(slashless());
```

`/foo/` redirects to `/foo`.
