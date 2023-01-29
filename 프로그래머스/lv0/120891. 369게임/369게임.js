function solution(order) {
    var answer = 0;
    return [...String(order)].filter(x => x==="3" || x==="6" || x==="9").length;
}