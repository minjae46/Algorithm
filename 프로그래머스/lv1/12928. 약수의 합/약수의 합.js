function solution(n) {
    let arr = [];
    let sum = 0;
    
    for(let i=1; i<=n; i++) {
        if (n%i === 0) {
            arr.push(i);
        } 
    }
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}