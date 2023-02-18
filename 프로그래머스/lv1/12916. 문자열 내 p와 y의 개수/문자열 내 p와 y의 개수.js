function solution(s){
    var answer = true;

    return [...s].filter(str => str === "p" || str === "P").length === [...s].filter(str => str === "y" || str === "Y").length
}