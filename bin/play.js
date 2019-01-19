#! /usr/bin/env node

function sleep(duration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + duration) {}
}

[5, 4, 3, 2, 1].forEach(function(n) {
  setTimeout(function() {
    console.log(n);
  }, n * 1000);
});

console.log("end");
