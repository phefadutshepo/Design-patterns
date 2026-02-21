// -------------  Bad Example  -------------//

// class Bird {
//   fly(): void {
//     console.log("Flying...");
//   }
// }

// class Penguin extends Bird {
//   fly(): void {
//     throw new Error("Penguins can't fly");
//   }
// }

// -------------  Good Example  -------------//

interface Bird {}

interface FlyingBird extends Bird {
  fly(): void;
}

class Sparrow implements FlyingBird {
  fly(): void {
    console.log("Flying...");
  }
}

class Penguin implements Bird {
  swim(): void {
    console.log("Swimming...");
  }
}