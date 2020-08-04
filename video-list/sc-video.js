$(document).ready(function () {
  //var linkvideo = 'M7lc1UVf-VE';
  var filtrotema = "";
	/*for( index in json.poster )
    {
      $('#Seleccionador ul').append('<li><a class="hola" href="#" data-archivo="'+json.poster[index].archivo+'" data-autores="'+json.poster[index].autores+'">'+json.poster[index].titulo+'</a></li>');
    }*/
  var json;



  $.getJSON('https://raw.githubusercontent.com/jrodrigopuca/jrodrigopuca.github.io/master/listaVideos.json', function (data) {
    json = JSON.stringify(data);




    function agregarItems(value) {
      $('#Seleccionador ul').append('<li class="list-group-item text-center">'
        + '<img src="' + value.imagen + '"><br>'
        + '<a class="hola" href="#" data-titulo="' + value.titulo
        + '" data-video="' + value.video
        + '" data-tipo="' + value.tipo
        + '" data-categoria"' + value.categoria
        + '">' + value.titulo
        + '</a></li>');

    }



    $(data).each(function (index, value) {
      agregarItems(value);
    });

    $("#Selecciona li").click(function () {
      //alert($(this).html());

      var seleccionado = $(this).html();
      if (seleccionado == "Todos") {
        filtroTema = ""; filtrar();
        $("#btnTema:first-child").text($(this).text());
      }
      else {
        filtroTema = seleccionado;
        filtrar();
        $("#btnTema:first-child").text($(this).text());
      }

    });

    function filtrar() {
      $('#Seleccionador ul').empty();
      $(data).each(function (index, value) {

        if ((value.categoria.indexOf(filtroTema) >= 0))
          agregarItems(value)
            ;
      });
    }

$('.hola' ).bind( "click", function() {
  $('#showdata').html('Título: ' + $(this).attr('data-titulo') + '| Categoría : ' + $(this).attr('data-categoria'));
  linkvideo = $(this).attr('data-video');
  $('#show').empty();
  $('#show').append('<iframe src="https://www.youtube.com/embed/' + $(this).attr('data-video') + '"frameborder="0" allowfullscreen ></iframe>');
});





  });



  /*
      var player;
      function onYouTubePlayerAPIReady() {
        player = new YT.Player('ytplayer', {
          height: '360',
          width: '640',
          videoId: linkvideo
        });
  
      };
  */

});


