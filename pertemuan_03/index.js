//Senin, 25 Januari 2021
let hello;
hello = "Hello World !!!";

const birthYear = 1996;
let age = 24;
age +=2;
let apakahSudahMenikah = true;
let alamat;

console.log (hello);
console.log (birthYear);
console.log (age);
console.log (apakahSudahMenikah);
console.log (alamat);

let namaDepan = "Ananta";
let namaBelakang = "Ferdinand";
let namaLengkap = namaDepan + " " + namaBelakang + 
                ". Usia saya adalah "+ age;

console.log (namaLengkap);
console.log (10 == "10"); //Loose Equality: true
console.log (10 === "10");//Strict Equality: false

let angka = 10;
//const hasil = 10 % 2 === 0? "Genap" : "Ganjil";
const hasil = angka % 2 === 0 && true ? "Genap" : "Ganjil";
console.log (hasil);

/*Function of JavaScript*/
//Function Declaration = 

//Argument
console.log (ucapkanSalam("Selamat siang dari function declaration"));
//Parameter
function ucapkanSalam (salam){
    return salam;
}

//Function Expression = 
const ucapkanSalam2 = function (salam){
    return salam2;
}
console.log (ucapkanSalam2("Selamat siang dari function expression"));