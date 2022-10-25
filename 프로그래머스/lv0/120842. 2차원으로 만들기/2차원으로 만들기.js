// function solution(num_list, n) {
//     const row = num_list.length/n
//     const column = n 
    
//     let arr = new Array(row);
    
//     for (let i=0; i<row; i++) {
//         arr[i] = new Array(column)
//         console.log(arr)
    
//     }
// }

function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length / n; i++) {
    result = [...result, num_list.slice(i * n, i * n + n)];
  }
  return result;
}