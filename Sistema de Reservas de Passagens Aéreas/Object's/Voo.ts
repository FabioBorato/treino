export class Fly {
    flyNumber:number;
    from:string;
    to:string;
    date: Date;
    availableSeats: number;
    passengers: Array<Object>;

    constructor(FlyNumber: number, From:string, To:string, Date: Date, AvailableSeats:number, Passengers:Array<Object>) {

        this.flyNumber = FlyNumber;
        this.from = From;
        this.to = To;
        this.date = Date;
        this.availableSeats = AvailableSeats;
        this.passengers = Passengers;

    }
    reserveSeat(reserveReceived: Array<Object>): boolean {

        if (reserveReceived.length <= this.availableSeats) {
            for (const reserve of reserveReceived) {
                this.passengers.push(reserve);
            }
            this.availableSeats -= reserveReceived.length;
            return true;
        } else {
            console.log(`Não há assentos suficientes, o número de assentos disponíveis é de apenas, ${this.availableSeats}`);
            return false;
        }
    }

    listPassengers(): void{
        console.log(this.passengers.map((p: any) => `${p.name}, de ${p.age} anos de idade, portador do cpf: ${p.cpf}`).join('\n'));    
    }
}