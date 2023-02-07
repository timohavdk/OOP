/** Класс "Работник" */
export default abstract class Employee {
    /** Номер социального страхования */
    private socialSecurityNumber: number;

    /** Пол */
    private gender: string;

    /** Дата рождения */
    private dateOfBirth: Date;

    /** Get - Номер социального страхования */
    public getSSN(): number {
        return this.socialSecurityNumber;
    };

    /** Get - Пол */
    public getGender(): string {
        return this.gender;
    };

    /** Get - Дата рождения */
    public getDateOfBirth(): Date {
        return this.dateOfBirth;
    };

    /** Set - Номер социального страхования */
    public setSSN(SSN: number): void {
        this.socialSecurityNumber = SSN;
    };

    /** Set - Пол */
    public setGender(gender: string): void {
        this.gender = gender;
    };

    /** Set - Дата рождения */
    public setDateOfBirth(dateOfBirth: Date): void {
        this.dateOfBirth = dateOfBirth;
    };

    abstract work(): void;

    constructor(SSN: number, gender: string, dateOfBirth: Date) {
        this.socialSecurityNumber = SSN;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
    }
}