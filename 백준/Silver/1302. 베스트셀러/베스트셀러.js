const fs = require("fs");
const [n, ...books] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const counts = {};

for (let book of books) {
  counts[book] = (counts[book] || 0) + 1;
}

const max = Math.max(...Object.values(counts));
const best = Object.keys(counts)
  .filter((book) => counts[book] === max)
  .sort();

console.log(best[0]);
