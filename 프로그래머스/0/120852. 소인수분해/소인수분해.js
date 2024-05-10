/* 소수에 대하여 :
    1) 2부터 N보다 작은 모든 숫자로 하나씩 계산하기
    2) N/2 까지만 계산하기
    3) N의 제곱근(루트N) 까지만 나누어서 계산하기
*/

/* 
(내가 생각한 풀이)
n보다 작은 소수를 모두 구한다. 
n을 가장 작은 소수(2)부터 나누어간다. (더 이상 나누어 떨어지지 않으면 다음 소수로 넘어감)
n이 더 이상 나누어지지 않을때까지 반복한다. 
*/

function solution(n) {
  let answer = [];
    
  // 1. 가장 작은 소수인, 2로 계속 나누기
  while(n%2 === 0) {
    answer.push(2);
    n /= 2;
  }
  console.log(n)
  console.log(answer)
    
  /* 2. 
    1.의 결과(2로 더이상 나누어지지 않음)로 나온 n을 3부터 루트n 사이의 소수로 나누어 가기
    (소수 판별법에 따르면 2 ~ 루트n(제곱근) 사이 소수로만 나누어보면 되므로)
  */
  for(let i=3; i*i<=n; i+=2) {
    // 3부터 루트n 사이의 모든 소수 구하는 for문. 짝수는 소수가 아니므로 2씩 더해 홀수만 확인. 
    while(n%i === 0) {
      answer.push(i);
      n /= i;
    }
  }
  console.log(n)
  console.log(answer)
    
  // 3. 2.의 결과 더 이상 나눌 수 없으면, 남은 n을 그대로 push. 
  if(n > 2) {
      answer.push(n)
  };
  console.log(n)
  console.log(answer)  
    
  // 중복 제거하여 반환
  return Array.from(new Set(answer))
}
// 위 코드는 통째로 '소인수분해' 구하는 코드로 쓰이니, 소수 구하는 코드와 함께 그냥 세트로 외워두자. 