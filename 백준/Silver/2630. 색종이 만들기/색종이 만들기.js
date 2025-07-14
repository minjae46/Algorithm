const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// // 입력 형태
// input = [
//   "8",
//   "1 1 0 0 0 0 1 1",
//   "1 1 0 0 0 0 1 1",
//   "0 0 0 0 1 1 0 0",
//   "0 0 0 0 1 1 0 0",
//   "1 0 0 0 1 1 1 1",
//   "0 1 0 0 1 1 1 1",
//   "0 0 1 1 1 1 1 1",
//   "0 0 1 1 1 1 1 1",
// ];

// 입력 처리
const N = Number(input[0]);
const paper = input.slice(1).map((line) => line.trim().split(" ").map(Number)); // 2차원 배열로 변경

let white = 0;
let blue = 0;

// 색종이 색 확인할 함수
function isSameColor(x, y, size) {
  const firstColor = paper[x][y];

  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (paper[i][j] !== firstColor) {
        return false;
      }
    }
  }
  return true; // 모두 같은 색
}

// isSameColor가 false이면 색종이 4등분하고, true이면 white, blue 카운트하는 함수
function divideAndCount(x, y, size) {
  if (isSameColor(x, y, size)) {
    if (paper[x][y] === 0) {
      white++;
    } else {
      blue++;
    }
    return;
  }

  const newSize = size / 2;
  divideAndCount(x, y, newSize); // 왼쪽 위
  divideAndCount(x, y + newSize, newSize); // 오른쪽 위
  divideAndCount(x + newSize, y, newSize); // 왼쪽 아래
  divideAndCount(x + newSize, y + newSize, newSize); // 오른쪽 아래
  // 이제 각각의 사각형 안에서 더 이상 분할되지 않을 때까지 4구역을 알아서 탐색함
}

divideAndCount(0, 0, N); // 처음 호출

console.log(white);
console.log(blue);
