import { Observer } from "../model/observer";


export class Subject{
    private observers: Observer[] = [];

    subscribe(observer: Observer){
        this.observers.push(observer);
    }

    unsubscriber(observer: Observer){
        this.observers = this.observers.filter(o => o !== observer);
    }

    notify(data: string){
        this.observers.forEach(observer => observer.update(data));
    }
}