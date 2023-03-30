function solution(numbers) {
    let answer;
    const sum = numbers.reduce((acc, cur) => {return acc+cur});
    /*     
    for(i of numbers) {
        answer += i
    }
    */
    answer = sum/numbers.length;
    return answer;
}