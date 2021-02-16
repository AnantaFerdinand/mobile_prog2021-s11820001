//Senin, 15 Februari 2021
//Destrukturisasi Array = 
// let age;
const arrPerson = ["John", "Doe", 33, true, "Minahasa Utara"];
console.log (arrPerson);

// const firstName = arrPerson[0];
// const lastName = arrPerson[1];
// const age = arrPerson[2];
// const isMarried = arrPerson[3];

// const [firstName, lastName/*, age, isMarried*/] = arrPerson;
// console.log (firstName, lastName/*, age, isMarried*/);

// let [, ,age, isMarried, address = "Manado"] = arrPerson;
// console.log (age, isMarried, address);

// let [firstName, lastName, ...rest] = arrPerson;
// console.log (rest);

//Destrukturisasi Object = 
// let firstName, lastName;
const objPerson = {
firstName : "John",
lastName : "Doe",
age : 33,
isMarried : true,
address : "Minahasa Utara",
};

// const firstName = objPerson.firstName;
// const lastName = objPerson.lastName;
// const age = objPerson.age;
// const isMarried = objPerson.isMarried;

const {/*firstName, lastName, age,*/ isMarried} = objPerson;
console.log (/*firstName, lastName, age, */isMarried);

const {age: umur} = objPerson;
console.log (umur);

// ({firstName, lastName, address = "Manado"} = objPerson);
// console.log (firstName, lastName, address);

let {firstName, lastName, ...rest} = objPerson;
console.log (firstName, lastName, rest);

const display = ({firstName, lastName}) => 
    `Hallo nama saya ${firstName} ${lastName}`;
console.log (display (objPerson));




