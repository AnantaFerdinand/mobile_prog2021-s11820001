//Rabu, 3 Maret 2021 
//Soal Nomor 1 = 
class Orang {
    constructor (nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    bekerja(){
        console.log(`${this.nama} sedang bekerja`);
    }
}

const Orang1 = new Orang ("Merry Doe", 25);
const Orang2 = new Orang ("Ananta Ferdinand", 24);

Orang1.bekerja();
Orang2.bekerja();

//Soal Nomor 2 = 
class Nama extends Orang{
    constructor (nama, umur, namaSekolah){
        super(nama,umur)
        this.namaSekolah = namaSekolah
        }
//Overriding = 
        tidur (){
            console.log (`${this.nama} sedang tidur`);
        }
        makan (){
            console.log (`${this.nama} sedang makan`);
        }
        belajar (){
            console.log (`${this.nama} belajar di ${this.namaSekolah}`)
        }
}

const User1 = new Nama ("Merry Doe", 25);
const User2 = new Nama ("Ananta Ferdinand", 24);
const User3 = new Nama ("John", 17, "Unklab")
User1.tidur();
User1.makan();

User2.tidur();
User2.makan();

User3.belajar();

