function solution(array) {
    var answer = 0;
    array.map(x => answer += String(x).split("").filter(s => s.includes("7")).length);
    return answer; 
}