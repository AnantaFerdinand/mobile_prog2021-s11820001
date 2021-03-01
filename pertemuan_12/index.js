//Senin, 1 Maret 2021
//Soal Nomor 1
// console.log ("Mandi");
// console.log ("Sarapan");
// console.log ("Berangkat ke Sekolah");

//Callback Function with setTimeout = 
console.log ("Mandi");
setTimeout(()=>{
    console.log ("Sarapan");
}, 3000);
console.log ("Berangkat Sekolah");

//Callback Hell = 
setTimeout(()=>{
 console.log ("Mandi");
    setTimeout(()=>{
         console.log ("Sarapan");
          setTimeout(()=>{
            console.log ("Berangkat Sekolah");
                   
           },2000);
       },2000);
    },2000);

//Soal Nomor 2
let condition = true;
function newPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
    if (condition){
        resolve ("Hello World 2");
    } else {
        reject ("Error");
    }  
      console.log ("Hello World !!");
    }, 2000);
   });
}
newPromise()
.then ((result)=>{
    console.log (`${result}`);
    return result;
})
.catch ((error)=>{
    console.log (error);
});

console.log ("Messages");

//Soal Nomor 3
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((json)=>{
    console.log (json);
})
.catch((error)=>console.log (error));

ambilDataUser = async () => {
try{
    const response = await
    fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    console.log (json);
} catch (error){
    console.log (error);
}
}
ambilDataUser();