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

  toString(animal = 'Animal') {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}


// Cat Class
class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Meow...");
  }
  toString() {
    return super.toString("Cat");
  }
}


// Dog Class
class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Woof!");
  }
  toString() {
    return super.toString("Dog");
  }
}

// Cow Class
class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }

  speak() {
    super.speak('Moo!');
  }

  toString() {
    super.toString('Cow');
  }
}

console.log("============================================");
const cat = new Animal(2, 4, true, false);
const dog = new Animal(2, 4, false, false);

dog.wake();
dog.walk();
dog.speak("woof!");

console.log(cat);
console.log(dog.toString());

console.log("============================================");

const cat1 = new Cat('Orange', true, false);
cat1.sleep();
console.log(cat1);

const dog1 = new Dog('Gold', true, true);
dog1.sit();
console.log(dog1);

const cow1 = new Cow('Brown', true, false);
cow1.walk();
cow1.sleep();
console.log(cow1);


class Human extends Animal {
    constructor(hair, name, language, isAwake, isMoving) {
        super(2, 2, isAwake, isMoving);
        this.hair = hair;
        this.name = name;
        this.language = language; 
    }
}

const me = new Human('black', 'Abe', 'Natural Language', false, false);
console.log(me);


class Developer extends Human {
    // coffeeLevel = 0;
    static MAXCOFFEELEVEL = 10;
    location = {};
    skills = [];
    constructor(hair, name, isAwake, isMoving, title, salary, team, city, state, ...skills) {
        super(hair, name, 'Natural Language' , isAwake, isMoving);
        this.title = title;
        this.salary = salary;
        this.team = team;
        this.coffeeLevel = 0;
        this.location.city = city;
        this.location.state = state;
        this.skills = skills;
    }

    drinkCoffee() {
        if (this.coffeeLevel < Developer.MAXCOFFEELEVEL) {
            this.coffeeLevel++;
        }
    }
}
console.log(Developer.MAXCOFFEELEVEL);

const dev1 = new Developer('HotPink', 'Max', false, true, 'Backend Developer', 90000, 'Dev Team', 'NYC', 'New York', 'html', 'js');
dev1.drinkCoffee();
dev1.drinkCoffee();
dev1.sit();
console.log(dev1);