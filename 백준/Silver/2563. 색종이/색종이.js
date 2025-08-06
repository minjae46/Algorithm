const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); // 검은 색종이 갯수

// 100x100 도화지를 0으로 초기화
const board = Array.from(Array(100), () => Array(100).fill(0));
let totalArea = 0;

// 검은 색종이 1칸씩 칠하기
for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  for (let dx = x; dx < x + 10; dx++) {
    for (let dy = y; dy < y + 10; dy++) {
      board[dx][dy] = 1;
    }
  }
}

// 칠해진 면적 계산
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (board[i][j] === 1) totalArea++;
  }
}

console.log(totalArea);