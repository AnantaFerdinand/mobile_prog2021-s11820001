//Senin, 22 Februari 2021
console.log ("Satu");
console.log ("Dua");
console.log ("Tiga");

/*CallBack*/
function greetings (fullName) {
    console.log (`Hi ${fullName}`);
    callback (fullName);
}

function introduction (firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`;
    callback (fullName);
}
introduction ("John", "Doe",(fullName)=>{
    console.log(`Hi ${fullName}`);
});

// console.log ("Satu");
// setTimeout(()=>{
//     console.log ("Dua");
// }, 2000);
// console.log ("Tiga");

// function process1(){
//     console.log ("Proses 1 selesai dijalankan");
// }

// function process2(){
//     setTimeout(()=>{
//         console.log ("Proses 2 selesai dijalankan");
//     },2000);
// }

// function process3(){
//     console.log ("Proses 3 selesai dijalankan");
// }

// process1();
// process2(process3);
// process3();

//Callback Hell = 
// setTimeout(()=>{
//     console.log ("Process1");
//         setTimeout(()=>{
//                 console.log ("Process2");
//             setTimeout(()=>{
//                         console.log ("Process3");
//                 setTimeout(()=>{
//                             console.log ("Process4");
//                 }, 2000);
//        },2000);
//    },2000);
// },2000);

//Promise = 
let condition = true;
function newPromise() {
  return new Promise((resolve, reject) =>{
    if (condition){
        resolve ("Berhasil");
    } else {
        reject ("Error");
    }
   });
}
newPromise()
.then ((result)=>{
    console.log (result);
    return result;
})
.then ((result2)=>{
    console.log(`${result2}!!!`);
})
.catch ((error)=>{
    console.log (error);
});

function getIdStudent() {
    return new Promise((resolve, reject) =>{
        resolve ("12345");
       });
}

function getNameById(id) {
    return new Promise((resolve, reject) =>{
        if (id === "12345"){
            resolve ("John Doe");
        }else {
            reject ("Unknown ID Student");
        }
       });
}

//Callback with then = 
getIdStudent()
.then((id)=>{
    return getNameById(id);
})
.then((name)=>{
    console.log (name);
})
.catch((error)=>{
    console.log (error);
})
//Callback with then (Langsung) = 
getIdStudent().then((id)=>{
    getNameById(id)
    .then((name)=>{
        console.log (name);
    })
    .catch((error)=>{
        console.log (error);
    });
});

/*Async and Await*/
//Try and Catch = 
const getNameByIdAsync = async () => {
    try{
        const id = await getIdStudent();
        const name = await getNameById(id);
        console.log (name);
    } catch (error) {
        console.log (error);
    }
};
getNameByIdAsync();