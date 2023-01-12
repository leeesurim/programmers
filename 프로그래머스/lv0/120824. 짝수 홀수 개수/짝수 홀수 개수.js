function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.map(num => num % 2 === 0 ? even+=1 : odd+=1);
    return [even,odd];
//     return [
//         num_list.filter(num => num % 2 === 0).length,
//         num_list.filter(num => num % 2 === 1).length
//     ]
}
