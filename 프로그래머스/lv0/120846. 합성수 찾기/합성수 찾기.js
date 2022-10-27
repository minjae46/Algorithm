function solution(n) {
    let answer;
    let countArr = [];
    
    for (let i=1; i<=n; i++) {
        let count = 0;
        
        for (let j=1; j<=i; j++) {
            if(i%j === 0) {
                count++; 
            }
        }
        countArr.push(count)
    }
    const resultArr = countArr.filter(el => el >= 3)
    answer = resultArr.length
    
    return answer;
}