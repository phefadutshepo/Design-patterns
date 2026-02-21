// -------------  Bad Example  -------------//

// class MySQLDatabase {
//   save(data: any): void {
//     console.log("Saving to MySQL...");
//   }
// }

// class OrderService {
//   private database = new MySQLDatabase();

//   createOrder(order: any): void {
//     this.database.save(order);
//   }
// }

// -------------  Good Example  -------------//

interface Database {
  save(data: any): void;
}

class MySQLDatabase implements Database {
  save(data: any): void {
    console.log("Saving to MySQL...");
  }
}

class MongoDatabase implements Database {
  save(data: any): void {
    console.log("Saving to MongoDB...");
  }
}

class OrderService {
  constructor(private database: Database) {}

  createOrder(order: any): void {
    this.database.save(order);
  }
}

const db1 = new MongoDatabase();
const db2 = new MySQLDatabase();

const os1 = new OrderService(db1);
const os2 = new OrderService(db2);

os1.createOrder("Hello");
os2.createOrder("Hello");

