// -------------  Bad Example  -------------//

// interface Worker {
//   work(): void;
//   eat(): void;
// }

// class Robot implements Worker {
//   work(): void {
//     console.log("Working...");
//   }

//   eat(): void {
//     throw new Error("Robots don't eat");
//   }
// }

// -------------  Good Example  -------------//

interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Human implements Workable, Eatable {
  work(): void {
    console.log("Working...");
  }

  eat(): void {
    console.log("Eating...");
  }
}

class Robot implements Workable {
  work(): void {
    console.log("Working...");
  }
}