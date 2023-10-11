interface Veiculo {
    marca:string;
    modelo:string;
    ano:number;

    exibirDetalhes(): void;
}

class Carro implements Veiculo {
    constructor(public marca:string, public modelo:string, public ano:number, public numeroDePortas:number) {}

    exibirDetalhes() {console.log(`Carro: Marca:${this.marca}, Modelo:${this.modelo}, Ano:${this.ano}, Portas:${this.numeroDePortas}`)};

}

class Moto implements Veiculo {
    constructor(public marca:string, public modelo:string, public ano:number, public cilindradas:number) {}

    exibirDetalhes() {console.log(`Moto: Marca:${this.marca}, Modelo:${this.modelo}, Ano:${this.ano}, Cilindradas:${this.cilindradas}`)};

}

const carro = new Carro("Toyota", "Corolla", 2022, 4);
const moto = new Moto("Honda", "CBR500R", 2022, 500);

carro.exibirDetalhes(); // Deve imprimir os detalhes do carro no console
moto.exibirDetalhes(); // Deve imprimir os detalhes da moto no console