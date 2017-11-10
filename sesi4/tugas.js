function tugas(event){
    var nama = event.target.textContent;
    return alert("Halo " + nama);
}
var namaorang = document.getElementsByClassName('nama');
for (var i = 0; i < namaorang.length; i++) {
     namaorang[i].addEventListener('click' , tugas);
}

