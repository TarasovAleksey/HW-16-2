const persons = new Set();
let inputData = prompt('123, aleksey, tarasov, 45');

while (inputData !== null) {
    const data = inputData.split(',');
    const id = data[0];
    const firstName = data[1];
    const lastName = data[2];
    const age = data[3];

    if (persons.has(id)) {
        alert('Person with ID ' + id + ' already exists!');
    } else {
        const person = new Person(id, firstName, lastName, age);
        persons.add(id);
        console.log(person);
    }

    inputData = prompt('111, anton, petrov, 45');
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}