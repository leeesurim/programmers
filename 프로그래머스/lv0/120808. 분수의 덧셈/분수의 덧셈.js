function solution(denum1, num1, denum2, num2) {
    let denum = num1 * denum2 + num2 * denum1;
    let num = num1 * num2;
    let gcd = 1;
    for(let i = 1; i<= denum; i++){
        if(denum % i === 0 && num % i === 0){
            gcd = i
        }
    }
    return [denum/gcd , num/gcd];
}