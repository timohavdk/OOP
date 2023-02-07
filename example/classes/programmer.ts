import Employee from "./employee";

export default class Programmer extends Employee {
    /** Уровень */
    private _grade: number;

    /** Get - Уровень */
    public get grade(): number {
        return this._grade;
    }

    /** Set - Уровень */
    public set set(grade: number) {
        this._grade = grade;
    }

    public work(): void {
        console.log("I'm coding!");
    }

    constructor(SSN: number, gender: string, dateOfBirth: Date, grade: number) {
        super(SSN, gender, dateOfBirth);
        this._grade = grade;
    }
}