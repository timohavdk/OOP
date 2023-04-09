import Boat from "./boat";
import Coordinates from "./coordinates";

export default class BoatFactory {
    public constructor(type: string) {
        let boat;

        if ('launch' === type) {
            boat = new Boat(new Coordinates(4, 6), 'Yamaha', 'Fedor', 1);
        }
        else {
            boat = new Boat(new Coordinates(6, 10), 'LVMH', 'Grisha', 5);
        }

        return boat;
    }
}