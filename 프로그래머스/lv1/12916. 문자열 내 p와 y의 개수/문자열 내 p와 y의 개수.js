function solution(s){
    return [...s.toUpperCase()].filter(str => str === "P").length === [...s.toUpperCase()].filter(str => str === "Y").length

}