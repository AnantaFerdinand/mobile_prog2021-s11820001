//Rabu, 17 Februari 2021
const fullName = "John Doe";

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
};

const display =({firstName,lastName}) =>{
console.log (`Hello ${firstName} ${lastName}`);
};

// export {fullName as namaLengkap, person as Orang, display as Tampilkan};
export {fullName , person , display};