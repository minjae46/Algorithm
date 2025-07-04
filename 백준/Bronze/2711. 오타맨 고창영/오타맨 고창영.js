const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 문자열에서는 splice 안 되고 slice만 사용 가능

// 테스트 케이스 갯수
const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [pos, ltr] = input[i].split(" "); // 입력 형태를 [오타 위치, 문자열]로 변환

  const idx = Number(pos) - 1; // 오타 위치의 실제 인덱스

  const result = ltr.slice(0, idx) + ltr.slice(idx + 1); // 문자열에서 해당 인덱스를 제거하고 출력

  console.log(result);
}
