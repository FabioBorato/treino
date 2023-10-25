class Passageiro {
    nome:string;
    idade:number;
    cpf:any;

    constructor (public Nome:string, public Idade:number, public Cpf:string) {
        this.nome = Nome;
        this.idade = Idade;
        this.cpf = Cpf;

    }
}

export const p1 = new Passageiro('Luiz', 23, '111.222.333-44');
export const p2 = new Passageiro('Roberta', 33, '222.333.444-55');
export const p3 = new Passageiro('Maria', 27, '333.444.555-66');
export const p4 = new Passageiro('Fernanda', 22, '444.555.666-77');
export const p5 = new Passageiro('João', 42, '555.666.777-88');

