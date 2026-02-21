// -------------  Bad Example  -------------//

// class PaymentProcessor {
//   processPayment(type: string) {
//     if (type === "credit") {
//       console.log("Processing credit card...");
//     } else if (type === "paypal") {
//       console.log("Processing PayPal...");
//     }
//   }
// }

// -------------  Good Example  -------------//

interface PaymentMethod {
  process(): void;
}

class CreditCardPayment implements PaymentMethod {
  process(): void {
    console.log("Processing credit card...");
  }
}

class PaypalPayment implements PaymentMethod {
  process(): void {
    console.log("Processing PayPal...");
  }
}

class PaymentProcessor {
  processPayment(method: PaymentMethod): void {
    method.process();
  }
}

// Add a new payment
class CryptoPayment implements PaymentMethod {
  process(): void {
    console.log("Processing crypto...");
  }
}