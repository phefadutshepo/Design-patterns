import { Command } from "../model/command-interface";

export class RemoteControl {
  private command!: Command;

  setCommand(command: Command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}