function solution(my_string) {
    var answer = '';
    for (let str of my_string){
        answer.includes(str)? console.log(answer) : answer += str
    }
    return answer;
}