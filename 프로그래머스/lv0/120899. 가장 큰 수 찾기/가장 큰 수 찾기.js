function solution(array) {
    let num = array.slice().sort((a,b) => b-a)[0];
    return [num, array.indexOf(num)];
}