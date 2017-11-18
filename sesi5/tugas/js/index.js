$.get('https://ariona.net/talentbandung/', function(data, status) {

  for (var i = 0; i < data.length; i++) {
    $('.daftar-taman').append('<div class="grid-item">'+'<div class="taman">'+
          '<figure>'+
            '<a href="single.html">'+
              '<img src="'+data[i].image.thumbnail+'">'+
            '</a>'+
          '</figure>'+
          '<div class="taman-detail">'+
            '<h2>'+
              '<a href="single.html">'+
                '<span class="subtitle">Taman</span>'+
                '<span class="title">'+data[i].nama+'</span>'+
              '</a>'+
            '</h2>'+
            '<p>'+data[i].alamat+'</p>'+
          '</div>'+
        '</div>'+
      '</div>');
  }

  var filter = $('input');
  filter.keyup(tamanfilter);

  function tamanfilter(){
    var tamandiv = $('.taman');

    for (var i = 0; i < tamandiv.length; i++) {
      var item = $(tamandiv[i]).text().toLowerCase();
      if (item.indexOf(filter.val().toLowerCase()) > -1) {
        $(tamandiv[i]).slideDown();
      }else {
        $(tamandiv[i]).slideUp();
      }
    }
  }

} );
