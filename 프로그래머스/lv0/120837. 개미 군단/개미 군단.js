function solution(hp) {
    var answer = 0;
    while(hp!== 0){
        if(Math.floor(hp/5) !== 0){
            answer += Math.floor(hp/5);
            hp = hp % 5;
        } else if(Math.floor(hp/3) !== 0){
            answer += Math.floor(hp/3);
            hp = hp % 3;
        } else{
            answer += hp;
            break;
        }
    }
    return answer;
}