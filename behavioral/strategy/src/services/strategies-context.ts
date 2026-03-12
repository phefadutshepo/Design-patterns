import { PaymentStrategy } from "../model/paymentStrategy";


export class PaymentProcessor {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy){
        this.strategy = strategy;
    }

    setStrategy(strategy: PaymentStrategy){
        this.strategy = strategy;
    }

    processPayment(amount: number){
        this.strategy.pay(amount);
    }
}