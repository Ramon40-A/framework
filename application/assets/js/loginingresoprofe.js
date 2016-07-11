
$( document ).ready(function() {


$( "#boton2" ).click(function() {
  


// envio todos los .val() del #formulario1 a coneccion.php y la obtengo en formato JSON
$.getJSON( "coneccioningresoprofe.php",  $( "#formulario2" ).serialize()  )
  .done(function( data ) {



if(data.respuesta.codigo == 0){

alert(data.respuesta.mensaje);

}

if(data.respuesta.codigo == 1){
alert(data.respuesta.mensaje+" "+data.respuesta.usuario);

window.location='inicio.html';

}

if(data.respuesta.codigo == 2){

alert(data.respuesta.mensaje);

}





  }); 








});

});