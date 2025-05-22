import { oldPrinter } from "./oldPrinter";

// Step 3: Adapter -wraps PldPrinter to match Printer interface
export class PrinterAdapter implements Printer{
    private oldPrinter: oldPrinter;

    constructor(oldPrinter: oldPrinter){
        this.oldPrinter = oldPrinter;
    }

    print(content: string): void {
        this.oldPrinter.printerText(content);
    }
}