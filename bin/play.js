#! /usr/bin/env node

const promises = [5, 4, 3, 2, 1].map(function(n) {
  return new Promise(function(resolve) {
    setTimeout(resolve, n * 1000, n);
  }).then(function(o) {
    return new Promise(function(resolve) {
      setTimeout(resolve, o * 1000, o * 2);
    });
  });
});

Promise.all(promises).then(function(v) {
  console.log(v);
  console.log("end");
});
