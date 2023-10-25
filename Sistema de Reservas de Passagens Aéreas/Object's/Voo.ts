import {p1, p2, p3, p4, p5} from './Passageiros'

class Voo {
    numero:number;
    origem:string;
    destino:string;
    data: Date;
    assentosDisponiveis: number;
    passageiros: Array<Object>;

    constructor(Numero: number, Origem:string, Destino:string, Data: Date, AssentosDisponiveis:number, Passageiros:Array<Object>) {

        this.numero = Numero;
        this.origem = Origem;
        this.destino = Destino;
        this.data = Data;
        this.assentosDisponiveis = AssentosDisponiveis;
        this.passageiros = Passageiros;

    }
    reservarAssento(reservaRecebida: Array<Object>): boolean {
        if (reservaRecebida.length <= this.assentosDisponiveis) {
            for (const reserva of reservaRecebida) {
                this.passageiros.push(reserva);
            }
            this.assentosDisponiveis -= reservaRecebida.length;
            return true;
        } else {
            console.log(`Não há assentos suficientes, o número de assentos disponíveis é de apenas, ${this.assentosDisponiveis}`);
            return false;
        }
    }

    listarPassageiros(): void{
        console.log(this.passageiros.map((p: any) => `${p.nome}, de ${p.idade} anos de idade, portador do cpf: ${p.cpf}`).join('\n'));    
    }
}

const voo01 = new Voo(1,'São Paulo', 'Rio de Janeiro', new Date(2023, 9, 27, 6, 30), 6, []);

voo01.reservarAssento([p1, p2, p3, p4, p5]);

voo01.listarPassageiros();
