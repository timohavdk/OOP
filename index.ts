import Car from './example/classes/car';
import Coordinates from './example/classes/coordinates';
import Engine from './example/classes/engine';
import BoatFactory from "./example/classes/boatFactory";
import BoatAdapter from "./example/classes/boatAdapter";
import Boat from "./example/classes/boat";
import BoatIterator from "./example/classes/boatIterator";

const coordinates = new Coordinates(5, 7);
const engine = new Engine();

const bmw = new Car(coordinates, "BMW", 'jake', 'coupe', engine);
bmw.moving(4, 5, 4);
console.log('bmw', bmw);

const nissan = new Car(coordinates, "Nissan", "bill", "jeep", engine);
console.log('nissan', nissan);

const launch = new BoatFactory('launch');
const yacht = new BoatFactory('yacht');
console.log('launch', launch);
console.log('yacht', yacht);

const amphibian = new BoatAdapter(new Boat(new Coordinates(8, 6), 'Yamaha', 'Leha', 2));
amphibian.turnSteeringWheel();

const boats: Boat[] = [];
for (let i = 0; i < 10; i++) {
    const boat = new Boat(new Coordinates(i, i), 'Yamaha', `Person ${i}`, i);
    boats.push(boat);
}
const fleet = new BoatIterator(boats);
while (fleet.hasNext() == true) {
    console.log('iter', fleet.next())
}