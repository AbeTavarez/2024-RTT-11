
sayHello();
// greeting(); // error!
// sayItBack(); // error

// ======= Function Definitions ===============

// Regular function Definition
function sayHello() {
    const result = 3 + 3;
    console.log('Hello World!');
    console.log(result);
}

// Function Expression Definition
const greeting = function() {
    console.log('Greetings!');
}

// Arrow Function Definition
const sayItBack = () => {
    console.log('Back!');
}

greeting();
sayItBack();

// Arrow Functions

// Add Function
function add(num1, num2, num3) {
    console.log(arguments);
    return num1 + num2 + num3;
}

const result = add(2, 3, 4);
console.log(result);

// Multiply Function
const multiply = (num1, num2) => {
    return num1 * num2
};

const result1 = multiply(4,3);
console.log(result1);

// ========= Arguments

// function getDevObject(name) {
//     console.log(arguments);
//     const skills = [];
//     //
//     for (let i = 1; i < arguments.length; i++) {
//         skills.push(arguments[i]);
//     }
    
//     return {
//         devName: name, 
//         jobSkills: skills
//     };
// }


function getDevObject(name, ...skills) {
    console.log('===> ', skills);
    return {
        devName: name,
        jobSkills: skills
    }
}

const devObj = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'React');
const devObj1 = getDevObject('Max', 'JavaScript', 'PHP');
console.log(devObj);
console.log(devObj1);






