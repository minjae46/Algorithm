function solution(n) {
  let answer = [];
    
  // 2로 나눠지면 계속 나누기
  while (n % 2 === 0) {
    answer.push(2);
    n /= 2;
  }
  console.log(answer)

  // 3부터 루트n까지 나눌 수 있으면 나누기
  for (let i=3; i*i<= n; i+=2) {
    while (n % i === 0) {
      answer.push(i);
      n /= i;
    }
  }
  console.log(answer)
    
  // 루트n부터 n까지 소수인 경우 처리
  if (n > 2) {
      answer.push(n)
  };
  console.log(answer)  
    
  // 중복 제거하여 반환
  return Array.from(new Set(answer))

}