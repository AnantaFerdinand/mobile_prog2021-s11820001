//Rabu, 24 Februari 2021
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((item)=> {
  console.log (item);
});
const output = numbers.map((item)=>{
  return item + 1;
});
console.log (output);

/*Callback Function review*/
function display() {
  console.log ("Fungsi Display");
}
function func1 (callback) {
  callback();
}
func1(()=>{
  console.log ("Fungsi Display");
});
function func1 (callback) {
  console.log ("Fungsi 1");
  callback ();
}
function func2 (callback) {
  console.log ("Fungsi 2");
  // callback ();
}
// function display(callback) {
//   callback();
// }
display (func1 (func2));

//Async Single Thread = 
// setTimeout(()=>{
//   console.log ("Proses1");
//   setTimeout(()=>{
//     console.log ("Proses2");
//     setTimeout(()=>{
//       console.log ("Proses3");
//     }, 3000);
//   }, 3000);
// }, 3000);

//Async Multi Thread = 
console.log ("Proses1");
setTimeout(()=>{
  console.log ("Proses2");
}, 5000);
setTimeout(()=>{
  console.log ("Proses3");
}, 2000);
console.log ("Proses4");

/*Fetch*/
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
      console.log (json);
  })
  .catch((error)=>console.log (error));

  getJSONPlaceholder = async () => {
    try {
      const res = await
      fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      console.log (json);
    } catch (error) {
      console.log (error);
    }

  };
getJSONPlaceholder();
