function solution(n) {
    let result = 1;
    let count = 0;
    
    for (let i=1; i<=10; i++) {
        result *= i
        console.log(result)
        if (result > n) {
            return i-1
        } else if (result !== 1 && result === n) {
            return i
        }
    }

}