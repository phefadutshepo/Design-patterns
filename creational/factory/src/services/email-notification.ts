import { INotification } from "../model/notificatifion";

export class EmailNotification implements INotification {
  send() {
    console.log("Sending Email");
  }
}