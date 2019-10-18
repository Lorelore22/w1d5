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
