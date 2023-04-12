function solution(array) {
    const arrayS = array.sort((a, b) => {return a-b});
    const centerIdx = (((arrayS.length)+1)/2)-1;
    const answer = arrayS[centerIdx];
    return answer;

}