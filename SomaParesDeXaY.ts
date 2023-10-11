function somaNumerosPares(n: number) {
    let interaction: number[] = [];
    let result = 0; // Inicialize a variável result como 0
  
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        result += i; // Acumule o número par em result
      }
    }
  
    interaction.push(result); // Adicione o resultado final ao array
    console.log(interaction); // Imprima o array com o resultado final
}
  
somaNumerosPares(10);

  