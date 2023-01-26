function solution(my_string) {
    return [...my_string].filter(str => str === "0" ? str : parseInt(str)).map(num => Number(num)).sort((a,b) => a-b);
}