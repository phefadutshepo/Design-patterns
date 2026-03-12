import { CreditCardPayment, CryptoPayment, PayPalPayment } from "./services/strategies";
import { PaymentProcessor } from "./services/strategies-context";

const processor = new PaymentProcessor(new CreditCardPayment());

processor.processPayment(100);

processor.setStrategy(new PayPalPayment());
processor.processPayment(200);

processor.setStrategy(new CryptoPayment());
processor.processPayment(300);