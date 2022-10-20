function solution(phone_number) {
    let arr = phone_number.split('');
    
    let firstArr = arr.slice(arr.length-4, arr.length)
    let lastArr = arr.slice(0, arr.length-4).map(el => "*")

    return lastArr.concat(firstArr).join('')
}
    