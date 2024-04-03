function solution(my_string) {
    const arr = my_string.split('')
    let newArr = [];
    for (let i of arr) {
        if (!newArr.includes(i)) {
            newArr.push(i)
        }
    }
    let answer = newArr.join('')
    return answer;
}