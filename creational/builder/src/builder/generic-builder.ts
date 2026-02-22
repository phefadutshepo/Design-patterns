export class Builder<T>{
    private product: Partial<T> = {};

    set<K extends keyof T> (key: K, value: T[K]): this {
        this.product[key] = value;
        return this;
    }

    build(): T {
        return this.product as T;
    }
}