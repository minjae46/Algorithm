function solution(age) {
    const ageArr = age.toString().split('');
    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const answer = [];
    for (let i of ageArr) {
        answer.push(array[Number(i)])
    }

    return answer.join('');
}