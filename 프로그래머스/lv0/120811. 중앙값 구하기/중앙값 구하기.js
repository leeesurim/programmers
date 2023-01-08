function solution(array) {
    array.sort((a, b) => {
        return a - b;
    });
    return array[Math.trunc(array.length / 2)];
}