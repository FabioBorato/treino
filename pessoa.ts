class Pessoa {
    nome:string;
    idade:number;
    sexo:string;

    constructor (public Nome:string, public Idade:number, public Sexo:string) {
        this.nome = Nome;
        this.idade = Idade;
        this.sexo = Sexo;
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou do sexo ${this.sexo}.`);
    };
}

const pessoa1 = new Pessoa("Fábio", 23, "Masculino");

pessoa1.apresentar();