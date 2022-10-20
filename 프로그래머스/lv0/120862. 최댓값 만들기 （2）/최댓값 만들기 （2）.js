
function solution(numbers) {
    let arr = [];
    let answer = 0;
    for (let i=0; i<numbers.length; i++) {
       for (let j=i+1; j<numbers.length; j++) {
           arr.push(numbers[i]*numbers[j])
           answer = Math.max(...arr)
       }
    }
    return answer
}

// 배열의 수가 모두 같거나, 배열 내 같은 수를 곱한 수가 가장 클 경우는??
// 음의 정수만 빼서 그 중 곱한 값과, 양의 정수끼리 빼서 그 중 곱한 값을 비교해서 가장 큰수?