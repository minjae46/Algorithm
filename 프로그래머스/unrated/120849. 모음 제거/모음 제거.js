function solution(my_string) {
    let newStr = my_string.replace(/[aeiou]/g, '')
    return newStr
}