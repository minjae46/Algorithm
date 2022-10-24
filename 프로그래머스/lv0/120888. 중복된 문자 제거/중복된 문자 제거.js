function solution(my_string) {
    let arr = my_string.split('')
    let newArr = [];
    for (let i in arr) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    let answer = newArr.join('')
    return answer
}