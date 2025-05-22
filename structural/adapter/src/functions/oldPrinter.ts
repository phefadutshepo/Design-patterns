// Step 2: Adaptee - existing/legacy class
export class oldPrinter{
    printerText(content: string): void{
        console.log(`OldPrinter: ${content}`);
    }
}