console.log("Array Methods");

const digits = [1, 2, 3, 4, 6, 7, 8];

// mutates the array in place
digits.unshift(0);
digits.splice(5, 0, 5);
digits.push(9);

digits.forEach(function(digit) {
  console.log(digit);
});

console.clear();

/*
const squares = [];
digits.forEach(function(digit) {
  squares.push(digit * digit);
});
*/

const squares = digits.map(function(digit) {
  return digit * digit;
});

const cities = ["berlin", "amsterdam", "lisbon", "paris"];

const upperCasedCities = cities.map(function(city) {
  return city.toUpperCase();
});
// ["BERLIN", "AMSTERDAM", "LISBON", "PARIS"]

let garage = [
  {
    make: "Toyota",
    model: "Prius",
    year: 2004,
    miles: 140000
  },
  {
    make: "BMW",
    model: "3 series",
    year: 2010,
    miles: 9000
  },
  {
    make: "Audi",
    model: "A4",
    year: 2010,
    miles: 80000
  }
];

const carMakes = garage.map(function(car) {
  return car.make;
});

// reassign `garage` to an array where all the cars in the original `garage` array will also have a `kms` property

garage = garage.map(function(car) {
  return {
    make: car.make,
    model: car.model,
    year: car.year,
    miles: car.miles,
    kms: car.miles * 1.6
  };
});

// [
//     {
//       make: "Toyota",
//       model: "Prius",
//       year: 2004,
//       miles: 140000,
//       kms: 224000
//     },
//     ... for every car
// ]

// arr.map returns a new array
// the array returned has, for every element in the original array, the returned result of the callback function
// that array has the same number of elements that arr has
// it doesn't mutate the array in place

// let sum = 0;
// digits.forEach(function(digit) {
//   sum += digit;
// });

let sum = digits.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

// prettier-ignore
const nested = [
    "a",
    [
        "b", "c"
    ], 
    [
        1, 2
    ], 
    [
        null, {}
    ]
];

// ["a", "b", 1, 2, null, {}]
const flattened = nested.reduce(function(accumulator, value) {
  return accumulator.concat(value);
}, []);

const odds = digits.filter(function(digit) {
  if (digit >= 10) {
    return true;
  }
});

console.log(odds);

const recentCars = garage.filter(function(car) {
  if (car.year >= 2010) {
    return true;
  }
});

const oneRecentCar = garage.find(function(car) {
  if (car.year >= 2010) {
    return true;
  }
});

// reverses the `digits` array and assigns it's reference to `reversedDigits`
// const reversedDigits = digits.reverse()
