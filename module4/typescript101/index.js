var learner = "Max";
var age = 22;
var isEnrolled = true;
//
var cohort = "Cohort-RTT-11";
var completed;
completed = true;
var finalScore = 100;
// Arrays
var colors = ["blue", "red", "green"];
colors.push("yellow");
// console.log(colors[0].toUpperCase());
console.log(colors);
var numbers = [1, 2, 3, 4];
numbers.push(5);
numbers.push(6);
// John
var john = {
    id: "1208365",
    name: {
        first: "John",
    },
    course: "Introduction to TypeScript",
    grades: [96, 88, 100, 94],
};
// Max
var max = {
    name: {
        first: "max",
    },
    course: "SE",
    grades: [100, 90],
};
//
function logLearner(l) {
    console.log("Learner ".concat(l.name.first, " ").concat(l.name.last, " is currently enrolled in ").concat(l.course, "."));
}
logLearner(john);
logLearner(max);
// Tuples
var tuple;
tuple = [11, true, 'hello'];
tuple[0] = 3;
tuple[1] = false;
tuple[2] = 'TS';
console.log(tuple[0]);
function createUser(obj) {
    var newUser = obj;
    return newUser;
}
var user1 = {
    username: 'anna',
    email: 'anna@test.com',
    password: 'pass',
    age: 22,
    admin: true
};
console.log('username' in user1);
createUser(user1);
