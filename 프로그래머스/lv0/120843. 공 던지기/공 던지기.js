function solution(numbers, k) {  
    const Idx = (k-1)*2;
    const drow = Math.abs(Idx%numbers.length);
    const answer = numbers[drow];
    return answer;
}