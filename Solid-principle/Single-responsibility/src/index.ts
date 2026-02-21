// -------------   Bad Example  -------------//

// class UserService {
//   createUser(userData: any) {
//     // 1. Business logic
//     if (!userData.email.includes("@")) {
//       throw new Error("Invalid email");
//     }

//     // 2. Database logic
//     console.log("Saving user to database...");

//     // 3. Email logic
//     console.log("Sending welcome email...");
//   }
// }

// -------------   Good Example  -------------//

class UserValidator {
  validateEmail(email: string): void {
    if (!email.includes("@")) {
      throw new Error("Invalid email");
    }
  }
}

class UserRepository {
  save(userData: any): void {
    console.log("Saving user to database...");
  }
}

class EmailService {
  sendWelcomeEmail(email: string): void {
    console.log("Sending welcome email...");
  }
}

class UserService {
  constructor(
    private validator: UserValidator,
    private repository: UserRepository,
    private emailService: EmailService
  ) {}

  createUser(userData: any): void {
    this.validator.validateEmail(userData.email);
    this.repository.save(userData);
    this.emailService.sendWelcomeEmail(userData.email);
  }
}

