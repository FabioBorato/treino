function calcularFatorial (n:number) {
    let passado:number = 1;

    for(let i = 1; i <= n; i++) {
        passado *= i;
    }

    return passado;
}

console.log(calcularFatorial(0));
console.log(calcularFatorial(5));
console.log(calcularFatorial(10));