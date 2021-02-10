//Rabu, 10 Februari 2021
/*Let, Const, Var*/
//Const =
const Person = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
};

//Let = 
let kalimat = 
"Hello, nama saya " + 
Person.firstName + 
" " + 
Person.lastName +
". Umur saya adalah " +
Person.age + " tahun.";
//String Literal with Let = 
let kalimat6 = `Hallo, nama saya ${Person.firstName} ${Person.lastName}. 
Umur saya adalah ${Person.age} tahun.`;

console.log (Person);
console.log (kalimat);
console.log (kalimat6);

/*Arrow Function*/
function sayHello1() {};
const sayHello2 = function() {};

//Implicit Return Value = 
const sayHello3 = (param1, param2) => `Hello ${param1} ${param2}.`;
console.log (sayHello3("Ananta", "Ferdinand"));

//Default Parameter = 
let sayHello4 = (param1, param2 = "Ferdinand") => `Hallo ${param1} ${param2}.`;
console.log (sayHello4("Ananta", "Doe"));

/*Rest Parameter and Spread Operator */
//Rest Parameter = 
const display = (param1, param2, ...rest) =>{
    console.log (param1, param2, rest);
}; display (1,2,3,4,5,6);

//Spread Operator for Array = 
const Array1 = [1, 2, 3];
const Array2 = [4, 5, 6];
const Array3 = [8, 9];

const combineArr = [...Array1, ...Array2, 7, ...Array3];
// let combineArr2 = [...CombineArr];
console.log (combineArr);
// console.log (combineArr2);

//Spread Operator for Object = 
const Object1 = {a:1, b:2};
const Object2 = {c:3, d:4};

const combineObj = {...Object1, ...Object2};
console.log (combineObj);

let Person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
};

Person2 = {
    ...Person,
    address: "Manado",
    job: "Teacher"
};

console.log (Person2);