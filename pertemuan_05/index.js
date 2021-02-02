//Senin, 1 Februari 2021
// let scores = [90, 85, 70];
// let arrJohn = ['John', 'Doe', 33, true, scores];
// // console.log (arrJohn[1], arrJohn[2]);
// // console.log (arrJohn[4] [1]);

// let objJohn = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 33,
//     isMarried: true,
//     scores: [100, 90, 85],
//     sayHello: function(){
//         console.log("Hello");
//     },
//     address: {
//         street: "Jl. Arnold Mononutu",
//         city: "North Minahasa",
//         province: "North Sulawesi",
//         postCode: "95371",
//     },
// };

// //Dot Notation = 
// console.log (objJohn.lastName);
// console.log (objJohn.sayHello());
// //Bracket Notation = 
// console.log (objJohn['age']);
// console.log (objJohn.scores[0]);
// console.log (objJohn.address.province);


//Array In Build Method
//Looping For = 
let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//      console.log (numbers[i]);
// }

//Array.forEach = 
// numbers.forEach (function(item, index, arr) {
// item *=2;
// console.log ("value: " + item + ", index: " + index + ", array: " + arr);
// });

//Array.map = 
let output = numbers.map (function (item) {
item *=2;
return (item *=2);
});
console.log("Array Numbers: ", numbers);
console.log("Array Output: ", output);

//Array.filter = 
let users = [
    {
        fullName: "John Doe",
        age: 33,
        addres: "North Minahasa",
    },

    {
        fullName: "Susan Boy",
        age: 25,
        address: "Semarang",
    },

    {
        fullName: "Jane Smith",
        age: 24,
        address: "Semarang",
    }, ];
console.log (users);

let filteredUsers = users.filter (function (user) {
return user.address === "Semarang"
});
console.log ("Filter Users", filteredUsers);

let listUsers = users.map (function (user) {
return user.fullName;
});
console.log ("Daftar User", listUsers);

//Array.find =
let findUsers = users.find (function (user) {
return user.address === "Semarang"
});
console.log ("Find User", findUsers);