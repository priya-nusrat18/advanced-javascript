const students = [
    {id: 20, name : "shafol"},
    {id: 30, name : "rabiul"},
    {id: 40, name : "awal"}

];
const output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const result = element.name;
    output.push(result);
}
console.log(output);

const names = students.map(s => s.name);
// console.log(names);

const ids = students.map(s => s.id);
// console.log(ids);
const bigger = students.filter(s => s.id > 20);
// console.log(bigger);
const biggerOne = students.find(s => s.id > 30);
console.log(biggerOne);