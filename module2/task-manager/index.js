console.log(this); // global window object

const signInForm = document.getElementById("signin");
// console.log(signInForm);

const user = {
  email: "user1@gmail.com",
  username: "user1",
  role: "default",
  updateUserName: function (newUsername) {
    this.username = newUsername;
  },
  printUserInfo: function () {
    console.log(
      `Username is: ${this.username}, and the role is: ${this.role}!`,
    );
  },
};

const user2 = {};

// user.updateUserName('PowerUser3');
// user.printUserInfo();

// console.log(user);

// User class
class User {
  username = "user33";

  email = "user33@gmail.com";

  role = "admin";

  updateUserName = function () {
    console.log(".....");
  };

  printUserInfo = function () {
    console.log("....");
  };
}

const user33 = new User("max", "max@gmail", "default");
const user34 = new User();
// console.log(user33);
// console.log(user34);

// console.log(user33 === user34);

// ============== PERSON OBJECT ===========================
const person = {
  name: {
    first: "Elyan",
    last: "Kemble",
  },
  age: 32,
  location: {
    city: "Garland",
    state: "Texas",
    zip: 75040,
  },
  occupation: "Front-End Developer",
  introduce() {
    console.log(this);
    console.log(
      `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`,
    );
  },
};

person.introduce();

signInForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const user33 = new User("max", "max@gmail", "default");
  console.log("from event listener: ", this);
});

window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded");
});

class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
  }

  sleep() {
    this.isAwake = false;
  }

  wake() {
    this.isAwake = true;
  }

  sit() {
    this.isMoving = false;
  }

  walk() {
    this.isMoving = true;
  }

  speak(sound) {
    console.log(sound);
  }

  toString() {
    return `This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? "is" : "is not"
    } awake, and ${this.isMoving ? "is" : "is not"} moving.`;
  }
}

class Cat extends Animal {}

class Dog extends Animal {}

class Cow extends Animal {}

console.log("============================================");
const cat = new Animal(2, 4, true, false);
const dog = new Animal(2, 4, false, false);

dog.wake();
dog.walk();
dog.speak("woof!");

console.log(cat);
console.log(dog.toString());

console.dir(Dog);
