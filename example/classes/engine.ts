export default class Engine {
	private _turns: number;

	public turnOn(): void {
		this._turns = 1000;
	}

	public turnOff(): void {
		this._turns = 0;
	}

	public state(): string {
		if (0 < this._turns) {
			return 'working';
		}

		return 'rest'
	}
}
