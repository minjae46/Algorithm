const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const n = Number(input[line]);
  const words = input.slice(line + 1, line + 1 + n);
  line += n + 1; // 다음 input[line]이 제대로 된 값이 나오려면 n + 1

  let result = "0";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        const word = words[i] + words[j];
        if (word.split("").reverse().join("") === word) {
          result = word;
        }
      }
    }
  }
  console.log(result);
}
