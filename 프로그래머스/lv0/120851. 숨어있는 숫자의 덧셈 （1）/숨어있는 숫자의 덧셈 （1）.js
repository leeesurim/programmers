function solution(my_string) {
    var answer = 0;
    [...my_string].filter(num => parseInt(num)).map(x => answer += parseInt(x))
    return answer;
}