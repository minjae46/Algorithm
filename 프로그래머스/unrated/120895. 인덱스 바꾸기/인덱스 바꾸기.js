function solution(my_string, num1, num2) {
    let answer = '';
    let arr = my_string.split('')
    let elNum1 = arr.splice(num1, 1, arr[num2])
    let newArr = [...arr];
    
    newArr.splice(num2, 1, elNum1[0])
    answer = newArr.join('')
    
    return answer;
}