import { Coffee } from "../model/coffee-interface";

export class SimpleCoffee implements Coffee{
    cost(): number{
        return 5;
    }

    description(): string {
        return "Simle Coffee";
    }
}