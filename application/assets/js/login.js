
$( document ).ready(function() {


$( "#boton1" ).click(function() {
  


// envio todos los .val() del #formulario1 a coneccion.php y la obtengo en formato JSON
$.getJSON( "coneccion.php",  $( "#formulario1" ).serialize()  )
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