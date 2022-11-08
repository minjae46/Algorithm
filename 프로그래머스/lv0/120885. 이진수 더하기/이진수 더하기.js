function solution(bin1, bin2) {
    const numBin1 = parseInt(bin1, 2)
    const numBin2 = parseInt(bin2, 2)
    
    const result = numBin1 + numBin2;
    const answer = result.toString(2)
    return answer;
}