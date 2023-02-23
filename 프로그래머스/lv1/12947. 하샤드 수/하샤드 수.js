function solution(x) {
    var answer = [...String(x)].map(x => x * 1).reduce((a, b) => a + b, 0);
    return x % answer === 0;
}