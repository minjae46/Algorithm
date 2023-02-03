function solution(n, k) {
    const answer = n*12000 + ((k-(Math.floor(n/10)))*2000);
    return answer;
}