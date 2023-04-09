import Vehicle from './vehicle';
import Coordinates from "./coordinates";

export default class Boat extends Vehicle {
	private level: number;

	public constructor(position: Coordinates, manufacture: string, owner: string, level: number) {
		super(position, manufacture,owner);
		this.level = level;
	}

	public moving(x: number, y: number, time: number) {
		console.log('Boat is sailing');
		this.speed = 40;
		setTimeout(() => {
			console.log('Boat stopped');
			this.speed = 0;
		}, 1000);
	}

	public getLevel(): number {
		return this.level;
	}

	public turnHelm(): void {
		console.log('Turn helm!')
	}
}
