function solution(numbers) {
    let answer;
    const sum = numbers.reduce((acc, cur) => {return acc+cur});
    answer = sum/numbers.length;
    return answer;
    /*     
    for(i of numbers) {
        answer += i
    }
    return answer/numbers.length;
    */
}