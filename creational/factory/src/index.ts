// -------------  Good Example  -------------//
import { NotificationFactory } from "./notification-factory/notification-factory";

const notificatifion = NotificationFactory.create("sms")
notificatifion.send();


// -------------  Bad Example  -------------//
// class EmailNotification {
//   send() {
//     console.log("Sending Email");
//   }
// }

// const notification = new EmailNotification();