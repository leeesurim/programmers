function solution(emergency) {
    var answer = [];
    for(let i=0; i< emergency.length; i++){
        let count = 1;
        for(let j=0; j<emergency.length; j++){
            // console.log(emergency[i], emergency[j]);
            if(emergency[i] < emergency[j]){
                count += 1;
                // console.log("count ", count);
                answer[i] = count;
                // console.log("answer[i] ", answer[i])
            } else {
                count += 0;
                // console.log("count ", count);
                answer[i] = count;
                // console.log("answer[i] ", i, answer[i])
            }
        }
    }
    return answer;
}