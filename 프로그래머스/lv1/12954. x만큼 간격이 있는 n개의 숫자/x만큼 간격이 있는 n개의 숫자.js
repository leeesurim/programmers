function solution(x, n) {
    var answer = [];
    return Array(n).fill(x).map((num, i) => num * i + x);
}