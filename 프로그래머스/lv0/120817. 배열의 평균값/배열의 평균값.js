function solution(numbers) {
    let answer;
    const sum = numbers.reduce((acc, cur) => {return acc+cur});
    answer = sum/numbers.length;
    /*     
    for(i of numbers) {
        answer += i
    }
    return answer/numbers.length;
    */
    return answer;
}