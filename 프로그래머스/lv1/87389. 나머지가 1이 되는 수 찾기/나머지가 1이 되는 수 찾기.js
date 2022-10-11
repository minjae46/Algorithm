function solution(n) {
    let answer = 0;
    let arr = [];
    for (let i=1; i<=n-1; i++) {
        if (n%i === 1) {
            arr.push(i)
        }
        answer = Math.min(...arr);
    }
    return answer;
}