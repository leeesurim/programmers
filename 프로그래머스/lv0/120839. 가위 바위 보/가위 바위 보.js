function solution(rsp) {
    var answer = [];
    const win = {
        2 : "0",
        0 : "5",
        5 : "2"
    }
    rsp.split("").map(num => answer.push(win[num]));
    return answer.join("");
}