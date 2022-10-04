function solution(numbers) {
    var answer = numbers.sort((a,b) => {
       return a-b
    })
    answer = answer[answer.length-1]*answer[answer.length-2];
    return answer;
}