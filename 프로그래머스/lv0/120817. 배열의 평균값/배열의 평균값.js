function solution(numbers) {
    let answer;
    const sum = numbers.reduce((acc, cur) => {return acc+cur});
    /*     
    for(i of numbers) {
        answer += i
    }
    return answer/numbers.length;
    */
    answer = sum/numbers.length;
    return answer;
}