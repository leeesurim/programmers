function solution(n) {
    let answer = 0;
    [...String(n)].map(x => answer+=Number(x));
    return answer
    
}