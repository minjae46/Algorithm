const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = Number(input);

let result = 0;

for (let i = 1; i < N; i++) {
  let sum = i;
  let temp = i;

  while (temp > 0) {
    sum += temp % 10; // 1의 자리 더함
    temp = Math.floor(temp / 10); // 다음 자리
  }

  if (sum === N) {
    result = i;
    break;
  }
}

console.log(result);