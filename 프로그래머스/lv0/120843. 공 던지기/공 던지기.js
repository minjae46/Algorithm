function solution(numbers, k) {
    // if (k === 1) {
    //     return numbers[0];
    // }
    
    const Idx = (k-1)*2;
    console.log(Idx)
    console.log(numbers.length)
    const drow = Math.abs(Idx%numbers.length);
    const answer = numbers[drow]
    return answer;
}