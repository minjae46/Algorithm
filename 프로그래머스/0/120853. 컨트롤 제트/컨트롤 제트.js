/*
배열화해서 "숫자 Z" 쌍을 그냥 배열에서 없애면 됨. 
반복문으로 요소 보다가, Z가 나오면 Z와 바로 앞 요소를 배열에서 삭제. 
남은 요소만 숫자로 바꾸어서 전부 더한 뒤 반환. 
*/


function solution(s) {
    let answer = 0;
    const arr = s.split(" ");
    
    for (let i=0; i<arr.length; i++) {
        while (arr[i] === 'Z') {
            arr.splice(i-1, 2)
        }
    }
    
    if (arr.length === 0) answer = 0;
    else {
        let resultArr = arr.map((el) => Number(el));
        answer = resultArr.reduce((acc,cur) => {return acc + cur}) 
    }
    
    return answer;
}