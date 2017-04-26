[![codeship][2]][1] [![npm version](https://badge.fury.io/js/fme-server-api.svg)](https://badge.fury.io/js/fme-server-api)

# FME Server API
A small client library to access FME Server (http://www.safe.com/fme/fme-server/). Note this is not for the FME Cloud API.

**Installing**

    npm install fme-server-api

**Using**
For a working example, see example.js

    var token = 'mytoken';
    var client = require('fme-cloud-api')(token);
    client.instances().then(console.log);

  [1]: https://www.codeship.io/projects/211734/
  [2]: https://img.shields.io/codeship/05578930-fc4f-0134-bf78-5a7bbc9ec5df.svg

**Todo**

    * Implement missing functions.
