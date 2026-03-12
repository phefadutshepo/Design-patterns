import { LightOffCommand, LightOnCommand } from "./commands/commands";
import { RemoteControl } from "./services/invoker";
import { Light } from "./services/receiver";

const light = new Light();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton(); // Light is ON

remote.setCommand(lightOff);
remote.pressButton(); // Light is OFF