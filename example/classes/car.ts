import Coordinates from './coordinates';
import Vehicle from './vehicle';
import Engine from './engine';

export default class Car extends Vehicle {
	private carcase: string;

	private engine: Engine;

	private static _instance: Vehicle = null;

	constructor(position: Coordinates, manufacture: string, owner: string, carcase: string, engine: Engine) {
		if (Car._instance !== null) {
			// @ts-ignore
			return Car._instance;
		}
		super(position, manufacture, owner);
		this.carcase = carcase;
		this.engine = engine;
		Car._instance = this;
	}

	public moving(x: number, y: number, time: number) {
		this.engine.turnOn();
		this.speed = 50;
		console.log("Сar is riding");
		setTimeout(() => {
			console.log("Сar stopped");
			this.engine.turnOff();
			this.speed = 0;
		}, 1000);
	}

	public getCarcase(): string {
		return this.carcase;
	}
}
