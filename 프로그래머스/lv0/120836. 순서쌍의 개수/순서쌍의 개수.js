function solution(n) {
    let count = 0;
    for (let i=1; i<=n; i++) {
        if (n%i === 0) {
            count++;   
        }
    }
    return count;
    //순서쌍 중 첫번째 숫자의 개수만 알면 된다. 
}