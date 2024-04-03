
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
