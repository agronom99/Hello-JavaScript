const cars = ["mazda", "mersedes", "bmw", "audi"];

// добавити в масив
cars.push("porche");

// заміна в масиві
const index = cars.indexOf("bmw");
cars[index] = "reno";
console.log(cars);

// перевод у верхній регістр
const upperCaseCars = cars.map((car) => {
  return car.toUpperCase();
});

console.log(upperCaseCars);
// Задача реверс строки
// const text = "Привіт, ми вивчаєм JavaScript";
// const reversText = text.split('').reverse().join('');
// console.log(reversText);

const people = [
  { name: "Віталій", budget: 7500 },
  { name: "Maksim", budget: 10500 },
  { name: "Денис", budget: 2500 },
];

const indexV = people.findIndex(function (person) {
  return person.budget === 10500;
});

const person = people.find(function (person) {
  return person.budget === 10500;
});

console.log(people[indexV]);
console.log(person);

const fib = [1, 1, 2, 3, 5, 8, 13];
// фільтр в масиві
const pow2 = (num) => num ** 2;
const pow2Fib = fib.map(pow2);
const filteredNumbers = pow2Fib.filter((num) =>  num > 20);

console.log(pow2Fib);
console.log(filteredNumbers);

