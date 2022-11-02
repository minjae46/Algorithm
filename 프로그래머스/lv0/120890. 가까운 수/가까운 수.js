function solution(array, n) {
    const diffArr = array.map(el => Math.abs(n-el))
    console.log(diffArr)
    const min = Math.min(...diffArr)
    console.log("최소차", min)
    
    let idxArr = [];

    for (let i=0; i<diffArr.length; i++) {
        if (diffArr[i] === min) {
            idxArr.push(i)      
        }
    }
    console.log("인덱스배열", idxArr)
    
    const resultArr = idxArr.map(el => array[el])
    console.log("결과배열", resultArr)
    
    const answer = Math.min(...resultArr)
    console.log(answer)
    
    // const minIdx = diffArr.indexOf(min)
    // console.log(minIdx)
    // const answer = array[minIdx]
    return answer
}