function solution(balls, share) {
    return Math.round((result(balls))/(result(balls-share) * result(share))) ;
}

function result(num){
    let answer = 1;
    for(let i=1; i <= num ; i++){
        answer *= i;
    }
    return answer
}