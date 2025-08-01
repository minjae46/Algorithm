const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const result = input
  .split("") // 문자열을 문자 배열로
  .map(Number) // 각 문자를 숫자로 변환
  .sort((a, b) => b - a) // 내림차순 정렬
  .join(""); // 다시 문자열로 합치기

console.log(result);
