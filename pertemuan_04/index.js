//Rabu, 27 Januari 2021
/*Array*/
//Array Literals = 
// let numbers = [1, 2, 3, 4, 5];
// let John = ['John', 'Doe', 33, true];

//Kata Kunci New = 
// let numbers = new Array(1, 2, 3, 4, 5);
// let John = new Array('John', 'Doe', 33, true);

//Length = 
// John[3] = false;
// console.log(numbers[numbers.length - 1]);
// console.log(John[John.length - 1]);

/*Object*/
//Object Literals = 
const John = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
    isMarried: true,
    sayHello: function(){
        console.log("Hello");
    },
};

//Kata Kunci New = 
// const John = new Object();
// John.firstName = "John";
// John.lastName = "Doe";
// John.age = 33;
// John.isMarried = true;

//Dot Notation = 
console.log(John.lastName);
//Bracket Notation = 
console.log(John['isMarried']);

John.address = "Bandung";
John["Nationality"] = "Indonesian";
console.log(John);
John.sayHello();
