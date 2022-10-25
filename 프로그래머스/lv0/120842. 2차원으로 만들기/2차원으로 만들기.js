function solution(num_list, n) {
//     const row = num_list.length/n
//     const column = n 
    
//     let arr = new Array(row);
//     for (let i=0; i<row; i++) {
//         arr[i] = new Array(column)
//     }
    // 새 2차원 배열 생성 방법 
    
    let arr = [];
    for (let i=0; i<num_list.length; i=i+n) {
        arr.push(num_list.slice(i,i+n))
    }
    return arr;
}
