class Contato {
    nome: string;
    email: string;
    telefone: string;
  
    constructor(nome: string, email: string, telefone: string) {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
    }
  
    exibirDetalhes() {
      console.log(`Nome: ${this.nome}, E-mail: ${this.email}, Telefone: ${this.telefone}`);
    }
  }
  
  const contato1 = new Contato("Alice", "alice@email.com", "(123) 456-7890");
  contato1.exibirDetalhes();
  
  const contato2 = new Contato("Bob", "bob@email.com", "(987) 654-3210");
  contato2.exibirDetalhes();
  