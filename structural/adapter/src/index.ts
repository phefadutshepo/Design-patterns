import { oldPrinter, PrinterAdapter } from "./functions";

//Step 4: Client code
const old_Printer = new oldPrinter();
const adaptedPrinter: Printer = new PrinterAdapter(old_Printer);

adaptedPrinter.print("Hello World!")