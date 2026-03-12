import { EmailSubscriber, SMSSubscriber } from "./services/observers";
import { Subject } from "./services/subject";


const subject = new Subject();

const user1 = new EmailSubscriber("user1@email.com");
const user2 = new SMSSubscriber("+123456789");

subject.subscribe(user1);
subject.subscribe(user2);

subject.notify("New product launched!");