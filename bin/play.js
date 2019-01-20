#! /usr/bin/env node
var rp = require("request-promise");
const before = new Date();
const promises = [5, 4, 3, 2, 1].map(function(n) {
  return rp
    .get({ uri: `http://localhost:8080/?number=${n}&previous=0`, json: true })
    .then(function(b) {
      console.log(b);
      return rp.get({
        uri: `http://localhost:8080/?number=${b.number * 2}&previous=${
          b.number
        }`,
        json: true
      });
    });
});

Promise.all(promises).then(function(v) {
  console.log(v);
  const after = new Date();
  const durationInSeconds = Math.abs(
    (after.getTime() - before.getTime()) / 1000
  );
  console.log(`Total duration: ${durationInSeconds}`);
});
