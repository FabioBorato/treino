import { Passenger } from "./Object's/Passageiros";
import { Fly } from "./Object's/Voo";


//< Passangers >//
const p1 = new Passenger('Luiz', 23, '111.222.333-44');
const p2 = new Passenger('Roberta', 33, '222.333.444-55');
const p3 = new Passenger('Maria', 27, '333.444.555-66');
const p4 = new Passenger('Fernanda', 22, '444.555.666-77');
const p5 = new Passenger('João', 42, '555.666.777-88');
//< Passangers >//


//< Fly >//
const fly01 = new Fly(1,'São Paulo', 'Rio de Janeiro', new Date(2023, 9, 27, 6, 30), 6, []);
//< Fly >//

fly01.reserveSeat([p1, p2, p3, p4, p5]);
//fly01.listPassengers();
console.log(fly01);