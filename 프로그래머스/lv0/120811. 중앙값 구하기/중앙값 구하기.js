function solution(array) {
    const arrayS = array.sort((a, b) => {return a-b});
    const centerIndex = (((arrayS.length)+1)/2)-1;
    const answer = arrayS[centerIndex];
    return answer;

}