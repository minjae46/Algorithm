function solution(my_string) {
    let answer = 0;
    let number = "";

    for(let i=0; i<my_string.length; i++) {
        if(!isNaN(Number(my_string[i]))) {
            number += my_string[i]
        
        } else {
            answer += +number;
            number = "";
        }
        console.log("정답", answer)
        console.log("넘버", number)
    }
    answer += +number;
    return answer;
}

// function solution(my_string) {
//     let result = 0
//     for(let i = 0 ; i < my_string.length;i++) {
//         let thisNum = ''
//         while(!Number.isNaN(Number(my_string[i]))) {
//             thisNum+= my_string[i]
//             i++
//         }
//         result+= +thisNum
//     }
//     return result
// }