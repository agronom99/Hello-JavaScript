function logPerson(s, name, age) {
  if (age < 0) {
    age = "Ще ненародився";
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}
const personName = "Денис";
const personName2 = "Maksim";
const personAge = 26;
const personAge2 = -10;

const output = logPerson`name: ${personName}, Вік: ${personAge}!`;
const output2 = logPerson`Імя: ${personName2}, Вік: ${personAge2}!`;

console.log(output);
console.log(output2);
