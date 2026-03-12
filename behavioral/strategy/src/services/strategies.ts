import { PaymentStrategy } from "../model/paymentStrategy";

export class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using Credit Card`);
  }
}

export class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal`);
  }
}

export class CryptoPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using Crypto`);
  }
}