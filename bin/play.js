#! /usr/bin/env node

function sleep(duration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + duration) {}
}

[1, 2, 3, 4, 5].forEach(function(n) {
  sleep(n * 1000);
  console.log(n);
});

console.log("end");
