// Global Scope
let z = 1;


// {
//     var x = 1;

//     {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }

//     console.log(x);  // 2
//   }

// {
//   let x = 1;
//   {
//     let x = 2; // different variable
//     console.log(x); // 2
//     console.log(username);
//   }
//   console.log(x); // 1
// }

// let x = 10;
// let y = 5;

// {
//   let z = x + y;
//   console.log(z);
//   {
//     console.log(z);
//     {
//       console.log(z);
//     }
//   }
// }


// let w = 10;

// {
// 	let y = 5;
// 	{
// 		let z = w + y;
// 		console.log(z);
// 	}
// }


let x = 10;
let username = "max";

{
	let y = 5;
	{
		let z = x + y;
        // console.log(z);
	}
	console.log(z);
}

if (x > 0) {
    console.log('Positive');
} else {
    console.log('Negative');
}

if (username === 'max') {
    console.log('Hello Max!');
}


let email = '';
console.log(email);

if (email) {
    console.log(`User email is ${email}`);
}


let userAge = prompt('Enter your age: ');

userAge = parseInt(userAge);// makes data to number type
console.log(typeof userAge);

// if (userAge >= 18) {
    
//     if (email) {
//         console.log('you can come in');
//     } else {
//         console.log('please provide an email');
//     }
    
// } else {
//     console.log('get out!');
// }

// Else if =======
if (userAge >= 18) {
    console.log('you can come in');

} else if (userAge < 18 && userAge >= 15) {
    console.log('please call you mom');

} else {
    console.log('get out!');
}