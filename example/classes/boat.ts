import Vehicle from './vehicle';

export default class Boat extends Vehicle {
	private level: number;

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
}
