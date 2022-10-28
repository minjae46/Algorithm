function solution(n) {
    if (n === 1) {
        return 1;
    }
    
    let result = 1;
    let i = 0;
    let count = 0;
    
    while (result < n) {
        i++;
        result = result * i
        count++;
    }
    if (result > n) {
        return count-1;
    } else if (result === n) {
        return count;
    } 
}