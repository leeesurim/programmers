function solution(s) {
    return (s.length === 4 || s.length === 6) ?  [...s].filter(x => isNaN(Number(x))).length > 0 ? false : true : false
}
