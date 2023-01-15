function solution(age) {
    var answer = "";
    const LISTS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const AGES = String(age).split("").map(num => parseInt(num));
    AGES.map((num) => answer += LISTS[num]);
    return answer;
}

