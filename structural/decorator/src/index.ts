import { MilkDecorator } from "./decorator/milk-decorator";
import { SugarDecorator } from "./decorator/sugar-decorators";
import { Coffee } from "./model/coffee-interface";
import { SimpleCoffee } from "./service/simple-coffee";

let coffee: Coffee = new SimpleCoffee();

coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);

console.log(coffee.description());
// Simple Coffee, Milk, Sugar

console.log(coffee.cost());
//8