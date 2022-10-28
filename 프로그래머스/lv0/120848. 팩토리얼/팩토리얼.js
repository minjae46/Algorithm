function solution(n) {
    let result = 1;
    let i = 0;
    let count = 0;
    
    while (result < n) {
        i++;
        result = result * i
        count++;
    }
    if (result > n) {
        return count-1
    } else if (result !== 1 && result === n) {
        return count
    } else {
        return 1
    }
    
    
    // for (let i=1; i<=10; i++) {
    //     result *= i
    //     if (result > n) {
    //         return i-1
    //     } else if (result !== 1 && result === n) {
    //         return i
    //     }
    // }
}