function solution(n) {
    var answer = 0;
    return Array.from({length:n}, (v,i) => i+1).filter(x=>![1, 2, 3, 5, 7].includes(x) && ( x % 2 === 0 || x % 3 === 0 || x % 5 === 0 || x % 7 === 0 )).length;
}