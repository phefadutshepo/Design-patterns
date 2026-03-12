import { Observer } from "../model/observer";


export class EmailSubscriber implements Observer{
    constructor(private email: string){}

    update(data: string): void {
        console.log(`Email sent to ${this.email}: ${data}`);
    }
}

export class SMSSubscriber implements Observer{
    constructor(private phone: string){}
    update(data: string): void {
        console.log(`SMS sent to ${this.phone}: ${data}`);
    }
}