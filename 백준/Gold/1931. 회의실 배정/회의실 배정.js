const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// // 입력 형태
// input = [
//   "11",
//   "1 4",
//   "3 5",
//   "0 6",
//   "5 7",
//   "3 8",
//   "5 9",
//   "6 10",
//   "8 11",
//   "8 12",
//   "2 13",
//   "12 14",
// ];

const N = Number(input[0]);
const meetings = [];

// 입력 파싱
for (let i = 1; i <= N; i++) {
  const times = input[i].split(" ");
  const start = Number(times[0]);
  const end = Number(times[1]);
  meetings.push([start, end]);
}

// 끝나는 시간 순 정렬
meetings.sort(function (a, b) {
  if (a[1] === b[1]) {
    return a[0] - b[0]; // 끝나는 시간이 같으면 시작 시간 빠른 순
  } else {
    return a[1] - b[1];
  }
});

let count = 0; // 가능한 회의 개수
let endTime = 0; // 다음 기준 시간

// 회의 시작 시간이 현재 기준 시간보다 이후이면 카운트 추가 후 기준 시간 갱신
for (let i = 0; i < N; i++) {
  if (meetings[i][0] >= endTime) {
    count++;
    endTime = meetings[i][1];
  }
}

console.log(count);
