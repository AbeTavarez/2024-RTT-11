let learner: string = "Max";
let age: number = 22;
let isEnrolled: boolean = true;
//
let cohort = "Cohort-RTT-11";
let completed: boolean;
completed = true;
let finalScore = 100;

// Arrays
const colors: string[] = ["blue", "red", "green"];
colors.push("yellow");
// console.log(colors[0].toUpperCase());
console.log(colors);

const numbers: number[] = [1, 2, 3, 4];

numbers.push(5);
numbers.push(6);

// Interface
interface Learner {
  // Add an optional id property:
  id?: string;
  name: {
    first: string;
    last?: string;
    // Make last optional using "last?"
  };
  course: string;
  grades: number[];
}

// John
const john: Learner = {
  id: "1208365",
  name: {
    first: "John",
  },
  course: "Introduction to TypeScript",
  grades: [96, 88, 100, 94],
};

// Max
const max: Learner = {
  name: {
    first: "max",
  },
  course: "SE",
  grades: [100, 90],
};


//
function logLearner(l: Learner) {
  console.log(
    `Learner ${l.name.first} ${l.name.last} is currently enrolled in ${l.course}.`,
  );
}

logLearner(john);
logLearner(max);



// Tuples
let tuple: [number, boolean, string];

tuple = [11, true, 'hello'];

tuple[0] = 3;
tuple[1] = false;
tuple[2] = 'TS';

console.log(tuple[0]);


// Type Alias

type User = {
    username: string,
    email: string,
    password: string,
    age: number,
    admin: boolean,
    dev?: boolean,
}

interface Car {
    year: number;
    model: string;
}

function createUser(obj: User): User {
    const newUser = obj;
    return newUser;
}

const user1: User = {
    username: 'anna',
    email: 'anna@test.com',
    password: 'pass',
    age: 22,
    admin: true
}

console.log('username' in user1);


createUser(user1);