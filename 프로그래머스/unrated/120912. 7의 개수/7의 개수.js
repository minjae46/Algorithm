function solution(array) {
    const newArr = [...array].join('')
    const newNewArr = newArr.split('')
    let count = 0;
    for (let i in newNewArr) {
        if (newNewArr[i] === '7') {
            count++; 
        } 
    }
    return count;
}