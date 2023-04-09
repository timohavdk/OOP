import Boat from "./boat";

export default class BoatIterator {
    public indexBoats: number;
    indexBoat: number;
    boats: Boat[];
    keys: string[];

    constructor(boats: Boat[]) {
        this.boats = boats;
        this.indexBoats = 0;
        this.indexBoat = 0;
        this.keys = Object.keys(boats[this.indexBoat]);
    }

    public next(): object {
        if (this.keys.length > this.indexBoat) {
            return this.boats[this.indexBoats][this.keys[this.indexBoat++]];
        }
        else if (this.boats.length > this.indexBoats) {
            this.indexBoats += 1;
            this.indexBoat = 0;

            if (this.indexBoats == this.boats.length) {
                return;
            }

            return this.boats[this.indexBoats][this.keys[this.indexBoat++]];
        }
    }

    public hasNext(): boolean {
        return this.boats.length > this.indexBoats;
    }
}