function solution(numbers) {
    let answer = numbers.sort((a,b) => {
       return b-a
    });
    answer = answer[0]*answer[1];
    return answer;
    
}