function solution(n) {
    var answer = [];
    return [...String(n)].map(x => x*1).reverse();
}