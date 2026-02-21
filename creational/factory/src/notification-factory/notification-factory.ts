import { INotification } from "../model/notificatifion";
import { EmailNotification } from "../services/email-notification";
import { SMSNotification } from "../services/sms-notification";

export class NotificationFactory{
    static create(type: "email" | "sms"): INotification{
        if(type === "email") return new EmailNotification();
        return new SMSNotification();
    }
}