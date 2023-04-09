import Coordinates from './coordinates';

export default abstract class Vehicle {
	protected speed: number;

	private _currentPosition: Coordinates;

	private readonly _manufactured: string;

	private _owner: string;

	constructor(position: Coordinates, manufacture: string, owner: string) {
		this._currentPosition = position;
		this._manufactured    = manufacture;
		this._owner           = owner;
	}

	public abstract moving(x: number, y: number, time: number): void;

	public getSpeed(): number {
		return this.speed;
	}

	public getManufactured(): string {
		return this._manufactured;
	}

	public getOwner(): string {
		return this._owner;
	}

	public setOwner(owner: string): void {
		this._owner = owner
	}
}
