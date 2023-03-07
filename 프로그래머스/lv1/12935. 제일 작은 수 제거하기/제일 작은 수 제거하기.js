function solution(arr) {
    // const answer = arr.slice().sort((a,b) => a-b)
    arr.splice(arr.indexOf(Math.min(...arr)), 1)
    
    return arr.length < 1 ? [-1] : arr
}