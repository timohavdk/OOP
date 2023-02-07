import Employee from "./employee";

export default class Soldier extends Employee {
    /** Звание */
    private _rank: string;

    /** Get - Звание */
    public get rank(): string {
        return this._rank;
    }

    /** Set - Звание */
    public set rank(rank: string) {
        this._rank = rank;
    }

    public work(): void {
        console.log("I'm saving!")
    }

    constructor(SSN: number, gender: string, dateOfBirth: Date, rank: string) {
        super(SSN, gender, dateOfBirth);
        this._rank = rank;
    }
}