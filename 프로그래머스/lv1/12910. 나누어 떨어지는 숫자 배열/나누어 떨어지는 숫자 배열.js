function solution(arr, divisor) {

    let newArr = [];
    let answer = [];
    
    for (let i in arr) {
        if (arr[i]%divisor === 0) {
            newArr.push(arr[i])
            answer = newArr.sort((a,b) => a - b) 
        } 
    }
    if (newArr.length === 0) {
        return [-1];
    }
    
    return answer;
}