function solution(numbers) {
    let answer;
    const result = numbers.reduce((acc, cur) => {return acc + cur});
    answer = result/numbers.length;
    return answer;
}