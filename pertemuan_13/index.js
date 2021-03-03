//Rabu, 3 Maret 2021
/*OOP In JavaScript*/
//Object Literal = 
// const mobil1= {
//     merek: "Toyota",
//     warna: "Putih",
//     nyalakanMobil: function (){
//         console.log (`Mobil dengan merek ${this.merek} sudah dinyalakan`);
//     },
// };


// const mobil2= {
//     merek: "Honda",
//     warna: "Merah",
//     nyalakanMobil: function (){
//         console.log (`Mobil dengan merek ${this.merek} sudah dinyalakan`);
//     },
// };

// mobil1.nyalakanMobil();
// mobil2.nyalakanMobil();

//Object Class = 
class Mobil {
    constructor (merek, warna){
        this.merek = merek;
        this.warna = warna;
    }
    nyalakanMobil (){
        console.log (`Mobil dengan merek ${this.merek} sudah dinyalakan`);
    }
}

// const mobil1 = new Mobil ("Toyota", "Putih");
// const mobil2 = new Mobil ("Honda", "Merah");
// mobil1.nyalakanMobil();
// mobil2.nyalakanMobil();

//Inheritance = 
class Toyota extends Mobil{
    constructor (merek, warna, mesin){
        super(merek,warna)
        this.mesin = mesin;
        }
//Overriding = 
        nyalakanMobil (){
            console.log (`Mobil dengan merek ${this.merek} sudah dinyalakan`);
        }
        matikanMesin (){
            console.log (`Mobil dengan merek ${this.merek} sudah dimatikan`);
        }
}

const Agya = new Toyota ("Agya", "Putih", "1200cc");
const Rush = new Toyota ("Rush", "Hitam", "1500cc");

Agya.nyalakanMobil();
Agya.matikanMesin();

Rush.nyalakanMobil();
Rush.matikanMesin();

// class Button extends Component{
//     componentDidMount(){

//     }
//     constructor (){

//     }
// }