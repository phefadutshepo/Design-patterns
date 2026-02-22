import { User } from "..";

export class UserBuilder {
    private name: string;
    private age?: number;
    private email?: string;
    private phone?: string;
    private address?: string;

    constructor(name: string){
        this.name = name;
    }

    setAge(age: number): this{
        this.age = age;
        return this;
    }

    setEmail(email: string): UserBuilder {
        this.email = email;
        return this;
    }

    setPhone(phone: string): this {
        this.phone = phone;
        return this;
    }

    setAddress(address: string): this {
        this.address = address;
        return this;
    }

    build(): User{
        if(!this.phone){
            throw new Error("Email is required");
        }

        return new User(
            this.name,
            this.age,
            this.email,
            this.phone,
            this.address
        );
    }

}