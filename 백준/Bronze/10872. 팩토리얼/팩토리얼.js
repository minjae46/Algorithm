const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1); //재귀 호출
}

console.log(factorial(input));
