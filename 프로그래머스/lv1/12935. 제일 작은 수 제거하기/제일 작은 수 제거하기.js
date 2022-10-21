function solution(arr) {
    let min = Math.min(...arr)
    //console.log(min)
    let minIdx = arr.indexOf(min)
    //console.log(minIdx)
    arr.splice(minIdx, 1)
    //console.log(arr)
    if (arr.length > 1) {
        return arr;
    } else {
        return [-1]
    }
}

//가장 작은 수를 구한다
//가장 작은 수의 인덱스를 구한다 
//해당 인덱스의 요소를 없앤 뒤 리턴한다
//해당 인덱스의 요소를 없앤 뒤 배열의 길이가 0이면 [-1]을 리턴한다 