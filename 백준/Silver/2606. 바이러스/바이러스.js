const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); // 컴퓨터 수
const M = Number(input[1]); // 연결된 컴퓨터의 쌍 수

// 인접 리스트 초기화
const graph = Array.from({ length: N + 1 }, () => []);
// 각 노드에 연결된 노드 배열 생성
for (let i = 2; i < 2 + M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a); // 양방향
}

const visited = Array(N + 1).fill(false); // 방문 여부 배열

let count = 0; // 감염된 컴퓨터 수

// dfs 함수
function dfs(v) {
  visited[v] = true; // 현재 노드 방문 처리
  for (const neighbor of graph[v]) {
    if (!visited[neighbor]) {
      count++; // 새로 방문한 컴퓨터는 감염된 것
      dfs(neighbor); // 재귀 호출
    }
  }
}

dfs(1); // 1번 컴퓨터에서 시작
console.log(count);
