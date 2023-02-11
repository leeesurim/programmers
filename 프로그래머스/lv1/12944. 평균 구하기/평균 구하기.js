function solution(arr) {
    var answer = 0;
    return arr.reduce((a,b) => a+b)/arr.length;
}