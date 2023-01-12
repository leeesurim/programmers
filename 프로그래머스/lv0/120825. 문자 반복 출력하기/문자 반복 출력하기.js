function solution(my_string, n) {
    // var answer = '';
    // return my_string.split("").map(str => answer += str.repeat(n));
    return [...my_string].map(str => str.repeat(n)).join("");
}