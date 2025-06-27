const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = Number(input);

let result = "";

for (let i = 0; i < N; i++) {
  if (i % 2 === 0) {
    result += '* '.repeat(N) + '\n';
  } else {
    result += ' *'.repeat(N) + '\n';
  }
}

console.log(result);