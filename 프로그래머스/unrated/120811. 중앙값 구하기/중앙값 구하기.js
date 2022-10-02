function solution(array) {
    const arrayS = array.sort((a, b) => {return a-b})
    console.log(arrayS)
    const centerIdx = (((arrayS.length)+1)/2)-1
    var answer = arrayS[centerIdx];
        console.log(answer)
    return answer;

}