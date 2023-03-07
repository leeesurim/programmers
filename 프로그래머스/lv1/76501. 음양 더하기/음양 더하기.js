function solution(absolutes, signs) {
    var answer = 0;
    signs.map((x,i) => x ? answer += absolutes[i] : answer -= absolutes[i])
    return answer;
}