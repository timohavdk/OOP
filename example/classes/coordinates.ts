export default class Coordinates {
	private _x: number;

	private _y: number;

	constructor(x: number, y: number) {
		this._x = x;
		this._y = y;
	}

	public getX(): number {
		return this._x;
	}

	public getY(): number {
		return this._y;
	}

	public setCoordinates(coordinates: Coordinates): void {
		this._x = coordinates.getX();
		this._y = coordinates.getY();
	}
}
