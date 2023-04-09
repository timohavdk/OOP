import Boat from "./boat";

export default class BoatAdapter {
    private boat: Boat;

    constructor(boat: Boat) {
        this.boat = boat;
    }

    public turnSteeringWheel(): void {
        this.boat.turnHelm();
    }
}