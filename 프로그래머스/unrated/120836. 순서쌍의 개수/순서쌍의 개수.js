function solution(n) {
    let arr = [];
    let count = 0;
    for (let i=1; i<=n; i++) {
        if (n%i === 0) {
            arr.push(n/i);
            count++;
            console.log(arr)
        }
    }
    return count
}