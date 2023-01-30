function solution(order) {
    return [...String(order)].filter(x => x==="3" || x==="6" || x==="9").length;
}