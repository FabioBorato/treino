function ordenarNomes (nomes:string[]):string[] {
    
    console.log(nomes.sort());
    return nomes.sort();
}

ordenarNomes(["Ana", "Carlos", "Maria", "Zoe", "Bob"]); // Deve retornar ["Ana", "Bob", "Carlos", "Maria", "Zoe"]
ordenarNomes(["Alice", "David", "Eva", "Carol", "Fred"]); // Deve retornar ["Alice", "Carol", "David", "Eva", "Fred"]
