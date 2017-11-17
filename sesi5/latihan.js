/*Latihan 1 sesi5 buat list menggunakan js */

var buah = ['rambutan', 'jambu','mangga','nanas','kelengkeng'];
var listbuah = document.getElementById('buah');


for(var i = 0; i <buah.length;i++) {
    var listItem = document.createElement('li'); /*create element untuk bikin tagnya */
    listItem.classList.add('buah');
    listItem.textContent = buah[i];
    listbuah.appendChild(listItem);
}

/*text.toUpperCase(); untuk capslok 
toLowerCase(); untuk kecil kata
text.replace('Bandung','Jakarta') mengganti bandung jadi jakarta
var pisah = text.split(','); untuk memisah dengan koma*/

//Latihan 2
/*
1. pilih alamat input
var filter1 = document.getElementById('filter');

2.  tambahkan event keyup dengan callback
filter.addEventListener ('keyup',filter)

3. buah function filter
function filterbuah(){

4. pilih element buah getElementByClassName
 var buah1 = document.getElementsByClassName('buah');

 5. looping element buah
 for (var i=0; i <buah1.length; i++) {

     6. buat var adengan list textcontent dari masing2 alamat
      var buahan = buah1[i].textContent.toLowerCase();
        var buahfilter = filter1.value.toLowerCase();
*/

//latihan 2
var filter = document.getElementById('filter');
filter.addEventListener('keyup',filterBuah);
function filterBuah(){
    var buah = document.getElementsByClassName('buah');

    for (var i=0; i <buah.length; i++) {

        var item = buah[i].textContent.toLowerCase();

        if(item.indexOf(filter.value.toLowerCase()) > -1) {
            buah[i].style.display = 'block';
        } else {
            buah[i].style.display= 'none';
        }
    }
}


