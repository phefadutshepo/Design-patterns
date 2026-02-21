import { Checkbox } from "../../model/components-interfaces";
import { UIFactory } from "../../model/factory-interfaces";
import { MacCheckBox } from "../components-factory/mac-checkbox";
import { WindowsButton } from "../components-factory/windows-button";

export class WindowsFactory implements UIFactory {
  createButton() {
    return new WindowsButton();
  }

  createCheckBox(): Checkbox {
    return new MacCheckBox();
  }
}