import { INotification } from "../model/notificatifion";

export class SMSNotification implements INotification {
  send() {
    console.log("Sending SMS");
  }
}