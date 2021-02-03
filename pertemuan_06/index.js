//Rabu, 3 Februari 2021
//Array Exercise

//1.Array for loop
//2. Using Array.forEach()
let people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
console.log (people [i]);
}

people.forEach (function (item, index, array) {
console.log ("value: " + item + ", index: " + index + ", array: " + array);
});

//3. Write the command to remove Greg from array
//4. Write the command  to remove James from array
//5. Write command to add Matt to the front of the array 
//6. Write command to add your name to the front of the array  
let people1 = ["Greg", "Mary", "Devon", "James"];
people1.splice (0, 4, "Matt", "Ananta", "Mary", "Devon");
console.log (people1);

//7. Using a for-loop, iterate through this array and after console.log-ing 
//"Mary", exit from the loop. (hint: use break keyword to exit loop)

//8. Write the command to make a copy of the array using slice. 
//The copy should NOT include "Mary" or "Matt"
let people2 = ["Greg", "Mary", "Devon", "James", "Matt", "Ananta"];
for (let i = 3; i < people.length; i++) {
console.log (people2[people.length - 2 - 1]);
}

let person = people2.slice (2,6);
console.log (person);

//9. Redefine the people variable with the value you started with. 
//Using the splice command, remove "Devon" from the array and add 
//"Elizabeth" and "Artie". Your array should look like this when you are done 
//["Greg", "Mary", "Elizabeth", "Artie", "James"].

//10. Create a new variable called withBob and set it equal to 
//the people array concatenated with the string of "Bob".
let people3 = ["Greg", "Mary", "Devon", "James"];
people3.splice (0,4, "Greg", "Mary","Elizabeth", "Artie","James");
console.log (people3);

let people4 = ["Bob"];
let person2 = people4.concat(people3);
console.log (person2);

//Object Exercise
//1. Write the command to add the language "Go" to the end of the languages array.
//2. By using the bracket notation, change the difficulty to the value of 7.
//3. Using the delete keyword, write the command to remove the jokes key from the programming object.
//4. By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
//5. Using a map(), iterate through the languages array and update each element to 
//be “0 - JavaScript, 1 - Python, … ”, 
//where 0 represents the index of the array, and console.log the output.


let ObjProgramming = {
    languages : ["JavaScript", "Phyton", "Ruby", "Go"],
    isChallenging: true,
    isRewarding: true,
    isFun: true,
    difficulty: [7],
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
console.log (ObjProgramming["languages"]);

console.log (ObjProgramming.difficulty[0]);

let jokes = ["Jokes sudah dihapus"];
delete ObjProgramming.jokes;
alert("Jokes sudah dihapus");


console.log (ObjProgramming.isFun);

let languages = ["JavaScript", "Phyton", "Ruby", "Go"];
languages.forEach (function(item, index, array) {
console.log ("value: " + item + ", index: " + index + ", array: " + array);
});

let output = languages.map (function (item){
return (item);
});
console.log ("Array languages: ", languages);
console.log ("Array output: ", output);

