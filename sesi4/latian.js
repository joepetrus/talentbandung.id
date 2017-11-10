var buah = ["jeruk","mangga","apel","pisang","salak","manggis","rambutan"];

console.log (buah[0]); /*print item ke 1 */
console.log (buah[4]); /*print item ke 5 */
buah[4] = "jambu"; /*ubah item ke 5 menjadi jambu */
console.log (buah[4]); /*print item ke 5 */

var person = {
    name : "Johannes",
    age : 22,
    address : "Soekarno Hatta",
    gadgets : {
        laptop : "mdp",
        phone : "56"
    },
    hobby : ["tidur", "ngoding"]
    
};

console.log(person.name);
console.log(person.gadgets.laptop); /*menampilkan laptop*/
console.log(person.hobby[1]); /*menampilkan dari hobby ke 1 dari array hobby */

/*latihan 2 page 13*/
var quran = {
    "code": 200,
    "status": "OK",
    "data": {
    "number": 1,
    "name": "سورة الفاتحة",
    "englishName": "Al-Faatiha",
    "englishNameTranslation": "The Opening",
    "revelationType": "Meccan",
    "numberOfAyahs": 7,
    "ayahs": [
    {
    "number": 1,
    "text": "﻿بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "numberInSurah": 1,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
    },
    {
    "number": 2,
    "text": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    "numberInSurah": 2,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
    },
    {
    "number": 3,
    "text": "الرَّحْمَٰنِ الرَّحِيمِ",
    "numberInSurah": 3,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
    },
    {
    "number": 4,
    "text": "مَالِكِ يَوْمِ الدِّينِ",
    "numberInSurah": 4,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
    },
    {
    "number": 5,
    "text": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    "numberInSurah": 5,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
    },
    {
    "number": 6,
    "text": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    "numberInSurah": 6,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
    },
    {
    "number": 7,
    "text": "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    "numberInSurah": 7,
    "juz": 1,
    "manzil": 1,
    "page": 1,
    "ruku": 1,
    "hizbQuarter": 1,
    "sajda": false
    }
    ],
    "edition": {
    "identifier": "quran-simple",
    "language": "ar",
    "name": "Simple",
    "englishName": "Simple",
    "format": "text",
    "type": "quran"
    }
}
}

console.log (quran.data.name);
console.log (quran.data.ayahs[0].text);
console.log (quran.data.ayahs[1].text);
console.log (quran.data.ayahs[2].text);
console.log (quran.data.ayahs[3].text);
console.log (quran.data.ayahs[4].text);
console.log (quran.data.ayahs[5].text);
console.log (quran.data.ayahs[6].text);


// IF - ELSE
var nilai = 6;
if (nilai > 6) {
    console.log("Selamat anda lulus dengan nilai memuaskan");
} else if (nilai >= 6) {
    console.log("Selamat anda lulus dengan nilai pas pasan");  
} else {
    console.log("Gosok lagi");
}

//Latihan 3

// console.log ==> pemanggilan untuk di console
//alert ==> pemanggilan untuk di web seperti peringatan

var jam = 22;
if (jam >=1 && jam <=11) {
    console.log("Selamat pagi");
} else if (jam >=12 && jam <=15) {
    console.log("Selamat siang");
} else if (jam >=16 && jam <=18) {
    console.log("Selamat sore");
} else if (jam >=19 && jam <=24) {
    console.log("Selamat malam");
}

// Latihan 4 Switch Case

var hari = "9";
switch ( hari) {
    case "1": 
        console.log("Senin");
            break;
    case "2":
        console.log("Selasa");
            break;
    case "3":
        console.log("Rabu");
            break;
    case "4":
        console.log("Kamis");
            break;
    case "5":
        console.log("Jumat");
            break;
    case "6":
        console.log("Sabtu");
            break;
    case "7":
        console.log("Minggu");
            break;
    default:
        console.log("Hari tidak ditemukan");
}

//Loop Perulangan

for (i=1; i<100; i++) {
    console.log('Perulangan ke -'+i);
}
    
console.log (quran.data.name);
for (i=0; i < quran.data.ayahs.length; i++) {
    console.log(quran.data.ayahs[i].text);
}

//Latihan 5 Perulangan
var buah1 = ['apel','jeruk','mangga','delima'];

for(i=0 ; i<buah1.length; i++) {
    console.log(buah1[i]);
}

//function
function luaspersegipanjang(panjang, lebar) { //panjang lebar ini 2 parameter
    var luas = panjang * lebar;
    return console.log(luas);
}
luaspersegipanjang(10,5);

//latihan function
function tampilnama (nama) {
    return console.log('Halo '+nama);
}
tampilnama('deden');
tampilnama('neneng');

//===========================================================================
//latihan alert dengan js
/*latian 6
1. buat input nama , email dan button greet 
2. tambahkan event*/

function greet() {
// var nama dan email di dalam function karena input
var nama = document.getElementById('name').value;
var email = document.getElementById('alamat_email').value;

alert('Haloo '+nama +' email saya '+email);
}
/*var btngreet diluar karena hanya dimasukan sekali */

var btngreet = document.getElementById('greet'); 
btngreet.addEventListener('click',greet);

/*function greet(event) {
    console.log(event.target.textContent) textcontent bisa style.backgroundcolor="red";
} */



