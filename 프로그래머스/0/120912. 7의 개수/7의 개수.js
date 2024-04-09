function solution(array) {
    const newArr = [...array].join('').split('')
    //원 배열 보존을 위한 얕은 복사
    let count = 0;
    for(let i of newArr) {
        if(i === '7') {
            count++; 
        } 
    }
    
    return count;
}