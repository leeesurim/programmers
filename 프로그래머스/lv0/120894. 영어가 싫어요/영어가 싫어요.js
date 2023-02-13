function solution(numbers) {
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i = 0; i < 10; i++) {
           numbers = numbers.replaceAll(arr[i], i);
            console.log(numbers)
        }

    return parseInt(numbers);
}