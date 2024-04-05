function solution(array, n) {
    const diffArr = array.map(el => Math.abs(n-el))
    const min = Math.min(...diffArr)
    // 모든 요소와 n의 절대값 차이를 구해 비교한 뒤, 가장 작은 차이의 수를 구한다 
    
    let idxArr = [];
    for(let i=0; i<diffArr.length; i++) {
        if(diffArr[i] === min) {
            idxArr.push(i)      
        }
    }
    // 최소차이 수의 인덱스(또는 인덱스들이 담긴 배열) 구하는 코드

    const resultArr = idxArr.map(el => array[el])
    const answer = Math.min(...resultArr)
    // 최소차이 숫자 요소가 여러개일 경우, 그 중 가장 장은 숫자 구하는 코드
    
    return answer;
}