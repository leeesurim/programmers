function solution(s) {
    var answer = '';
    let str = [...s].sort().join("")
    let arr = [...s].sort()

    for(let i=0; i<s.length; i++){
        if(arr[i] === arr[i+1]){
            str = str.replaceAll(arr[i], "")
        }
    }
    return str;
}