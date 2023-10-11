function encontrarMaiorElemento (arr:number[]):number {
    var maior = Math.max.apply(null, arr );
    var menor = Math.min.apply(null, arr );
    console.log(maior, menor);
    return maior;
}

encontrarMaiorElemento([1, 3, 5, 2, 8, 4, 6]); // Deve retornar 8
encontrarMaiorElemento([-10, -22, -9, -33, -21]); // Deve retornar -9
encontrarMaiorElemento([10, 22, 9, 33, 21, 50, 41, 60, 80]); // Deve retornar 80
