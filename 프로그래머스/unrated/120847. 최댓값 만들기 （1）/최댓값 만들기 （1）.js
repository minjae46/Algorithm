function solution(numbers) {
    // let answer = numbers.sort((a,b) => {
    //    return a-b
    // });
    // answer = answer[answer.length-1]*answer[answer.length-2];
    // return answer;
    
    let answer = numbers.sort((a,b) => {
       return b-a
    });
    answer = answer[0]*answer[1];
    return answer;
    
}