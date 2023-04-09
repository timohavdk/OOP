import Car from './example/classes/car';
import Coordinates from './example/classes/coordinates';
import Engine from './example/classes/engine';

const coordinates = new Coordinates(5, 7);
const engine = new Engine();
const bmw = new Car(coordinates, "BMW", 'jake', 'coupe', engine);
bmw.moving(4, 5, 4);
console.log('bmw', bmw);
const nissan = new Car(coordinates, "Nissan", "bill", "jeep", engine);
console.log('nissan', nissan)
