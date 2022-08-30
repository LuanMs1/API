function sum(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiplicaton(a, b){
    return a * b;
}

function division(a, b){
    if (parseInt(b) === 0) return 'Impossível dividir por zero';
    return a / b;
}

console.log(sum(1, 2));
console.log(subtraction(2, 2));
console.log(subtraction(2, 3));
console.log(subtraction(3,2));
console.log(multiplicaton(0,3));
console.log(multiplicaton(3,3));
console.log(division(2,0));
console.log(division(0,2));
console.log(division(2,2));
console.log(division(3,6));
