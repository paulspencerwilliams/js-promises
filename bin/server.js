var http = require("http");
var url = require("url");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

http
  .createServer(async function(req, res) {
    const before = new Date();
    res.writeHead(200, { "Content-Type": "application/json" });
    const { number, previous } = url.parse(req.url, true).query;
    await sleep(number * 1000);
    const after = new Date();
    const durationInSeconds = Math.abs(
      (after.getTime() - before.getTime()) / 1000
    );
    res.write(
      JSON.stringify({
        number: number,
        before: before,
        after: after,
        durationInSeconds: durationInSeconds,
        previous: previous
      })
    );
    res.end();
  })
  .listen(8080);
