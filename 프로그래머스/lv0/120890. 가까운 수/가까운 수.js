function solution(array, n) {
    array.sort((a,b) => a-b)
    let answer = array.map(x => Math.abs(x - n));
    return array[answer.indexOf(Math.min(...answer))]
}