function encontrarMaiorSubconjuntoCrescente(arr: number[]): number[] {
    let subconjuntoAtual: number[] = [];
    let maiorSubconjunto: number[] = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === 0 || arr[i] > arr[i -1]) {
        subconjuntoAtual.push(arr[i]);
      } else {
        subconjuntoAtual = [arr[i]];
      }
  
      if (subconjuntoAtual.length > maiorSubconjunto.length) {
        maiorSubconjunto = subconjuntoAtual.slice();
      }
    }
  
    return maiorSubconjunto;
  }
  
  console.log(encontrarMaiorSubconjuntoCrescente([1, 3, 5, 2, 8, 4, 6])); // Deve retornar [1, 3, 5, 8]
  console.log(encontrarMaiorSubconjuntoCrescente([10, 22, 9, 33, 21, 50, 41, 60, 80])); // Deve retornar [10, 22, 33, 50, 60, 80]
  console.log(encontrarMaiorSubconjuntoCrescente([3, 2, 6, 4, 5, 1])); // Deve retornar [3, 4, 5]
  