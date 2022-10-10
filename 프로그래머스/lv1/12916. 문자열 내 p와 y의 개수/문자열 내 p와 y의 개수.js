function solution(s){
    const str = s.toLowerCase();
    let pCount = 0;
    let yCount = 0;
    for (let i in str) {
        if (str[i] === 'p') {
            pCount++;
        } if (str[i] === 'y') {
            yCount++;
        } 
    }
    
    return pCount === yCount
}