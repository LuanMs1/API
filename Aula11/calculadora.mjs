export const soma = (a, b) =>{
    return a + b;
}

export const sub =(a, b) => {
    return a - b;
}

export const mul = (a, b) => {
    return a * b;
}

export const div = (a, b) => {
    if (parseInt(b) === 0) return 'Impossível dividir por zero';
    return a / b;
}
