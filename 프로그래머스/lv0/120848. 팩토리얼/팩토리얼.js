function solution(n) {
    for(let i=1; i<=n; i++){
       if(test(i) === n ||  test(i+1) > n){
           return i
       }
    }
}
    
function test(n){
    let answer = 1;
    for(let i=1; i<=n; i++){
       answer *=i
    }
    return answer;
}
