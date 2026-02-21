import { Button, Checkbox } from "./components-interfaces";

export interface UIFactory{
    createButton(): Button;
    createCheckBox(): Checkbox;
}