function solution(array, n) {
    const diffArr = array.map(el => Math.abs(n-el))
    const min = Math.min(...diffArr)
    // 모든 요소와 n의 차이를 구해 비교한 뒤, 가장 작은 차이의 수를 구한다 
    
    let idxArr = [];
    for (let i=0; i<diffArr.length; i++) {
        if (diffArr[i] === min) {
            idxArr.push(i)      
        }
    }
    // 최소차이 수의 인덱스를 구하는 함수 
    // 최소차이 수가 여러개, 즉 가까운 수가 여러 개 일 경우 포함

    const resultArr = idxArr.map(el => array[el])
    const answer = Math.min(...resultArr)
    
    return answer;
}