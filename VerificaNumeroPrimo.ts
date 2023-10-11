function ehPrimo (n:number):boolean {
    if(n <= 1 ) {
        return false;
    } 

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false; // Se n for divisível por qualquer número entre 2 e n-1, não é primo
        } 
      }

    return true;
}

console.log(ehPrimo(138));