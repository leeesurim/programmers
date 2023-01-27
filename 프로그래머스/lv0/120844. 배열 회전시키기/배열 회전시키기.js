function solution(numbers, direction) {
    let answer = [];
    if(direction === "right"){   
        numbers.map((x,i) => i === numbers.length -1 ? answer[0] = numbers[i] : answer[i+1] = numbers[i])
    }else{
        numbers.map((x,i) => i === 0 ? answer[numbers.length-1] = numbers[i] : answer[i-1] = numbers[i])
    } 
    return answer;
}