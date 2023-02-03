function solution(i, j, k) {
    var answer = 0;
    for(let n=i; n<=j; n++){
            answer += String(n).split("").filter(x => x.includes(k)).length
    }
    return answer;
}