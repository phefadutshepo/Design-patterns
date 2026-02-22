import { CoffeeDecorator } from "./coffee-decorator";

export class MilkDecorator extends CoffeeDecorator{
    cost(): number {
        return this.coffee.cost() + 2;
    }

    description(): string {
        return this.coffee.description() + ", Milk";
    }
}