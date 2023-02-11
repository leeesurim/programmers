function solution(n){
    return [...String(n)].reduce((a,b) => Number(a) + Number(b), 0);
}