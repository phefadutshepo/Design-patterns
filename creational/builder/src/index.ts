import { Builder } from "./builder/generic-builder";
import { UserBuilder } from "./builder/user-builder";

export class User {
    constructor(
        public readonly name: string,
        public readonly age?: number,
        public readonly email?: string,
        public readonly phone?: string,
        public readonly address?: string
    ){}
}

const user = new UserBuilder("John")
            .setAge(30)
            .setEmail("john@email.com")
            .setPhone("087653567")
            .setAddress("New York")
            .build();

console.log(user);

// ----------- Generic builder ---------//

interface Car {
    brand: string;
    model: string;
    year: number
}

const car = new Builder<Car>()
        .set("brand", "Tesla")
        .set("model", "Model S")
        .set("year",2024)
        .build();

console.log(car)