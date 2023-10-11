function ehPalindromo(str: string): boolean {
    // Remova caracteres não alfanuméricos e converta a string para minúsculas
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Verifique se a string é igual quando lida da esquerda para a direita e da direita para a esquerda
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  console.log(ehPalindromo("radar")); // Deve retornar true
  console.log(ehPalindromo("Ana")); // Deve retornar true
  console.log(ehPalindromo("A man, a plan, a canal, Panama!")); // Deve retornar true
  console.log(ehPalindromo("programação")); // Deve retornar false
  


  