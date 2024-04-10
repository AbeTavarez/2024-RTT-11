
const cars = []; // array
console.log(cars);


// Object
const myOldCar = {}

const vehicle = {
    interiorColor: 'red',
    year: '2024',
    brand: 'Toyota',
    model: 'Tundra',
    isElectric: false,
    mileage: 1000,
    "active registration": true,
    exteriorColor: 'blue',
    engine: {
        cylinders: 6,
        hp: 4000,
        size: 3.2
    }
};

console.log(vehicle);
console.log(vehicle.color);
console.log(vehicle.isElectric);
console.log(vehicle.mileage);

console.log(vehicle["year"]);
console.log(vehicle["active registration"]);


// deletes an object's property
delete vehicle["active registration"];

// add a new property
vehicle.activeRegistration = false;

vehicle.package = 'Tech Package';

//
vehicle.model = 'Camry';

//
// vehicle.engine = {
//     cylinders: 6,
//     hp: 4000,
//     size: 3.2
// }

console.log(vehicle);
console.log(vehicle.engine.size);


//
for (const key in vehicle) {
    // console.log(key);
    // console.log(vehicle[key]);
    // console.log(`${key}: ${vehicle[key]}`);
}

const vehicle1 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

const vehicle2 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

console.log(vehicle1 === vehicle2); // false
console.log(vehicle1.color === vehicle2.color); // true
console.log(vehicle1.year === vehicle2.year); // true
console.log(vehicle1.engine === vehicle2.engine); // false
console.log(vehicle1.engine.cylinders === vehicle2.engine.cylinders);
















// myOldCar.brand = 'Honda';
// myOldCar.year = '2000';
// myOldCar.color = 'White'
// console.log(myOldCar);