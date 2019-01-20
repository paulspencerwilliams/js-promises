#! /usr/bin/env node
var rp = require("request-promise");

async function doIt() {
  return Promise.all(
    [5, 4, 3, 2, 1].map(async function(n) {
      const b = await rp.get({
        uri: `http://localhost:8080/?number=${n}&previous=0`,
        json: true
      });
      console.log(b);
      return await rp.get({
        uri: `http://localhost:8080/?number=${n * 2}&previous=${
          b.durationInSeconds
        }`,
        json: true
      });
    })
  );
}
const before = new Date();
(async () => {
  const result = await doIt();
  console.log(result);
  const after = new Date();
  const durationInSeconds = Math.abs(
    (after.getTime() - before.getTime()) / 1000
  );
  console.log(`Total duration: ${durationInSeconds}`);
})();
