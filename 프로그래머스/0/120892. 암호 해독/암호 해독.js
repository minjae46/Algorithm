function solution(cipher, code) {
    let answer = '';
    let cipherArr = cipher.split('');
    let arr = [];
    for(let i=code-1; i<=cipherArr.length; i+=code) {
        arr.push(cipherArr[i])
        answer = arr.join('')
    }
    return answer;
}
//For문 돌려서 code 배수 인덱스 글자만 배열에 넣은 다음 합치기
