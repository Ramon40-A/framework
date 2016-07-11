//inicio jquery
$( document ).ready(function() {






$( "#boton2" ).click(function() {
  

console.log($( "#formulario2" ).serialize());

$.get( "coneccioningresoprofe.php", $( "#formulario2" ).serialize())
  .done(function( data ) {
    alert( data );

//limpio la tabla
$("#registros").html("");


//obtengo JSON Y LLENO LA grilla
$.getJSON( "profesores.php", function( data ) {



//recorro cajon de profesores y lo lleno
$.each(data.profesores, function( indice, valor ) {




$("#registros").append("<tr><td>"+ valor.idprofesores + "</td><td>"+ valor.nombre + "</td><td>"+ valor.apellido + "</td><td>" + valor.asignatura + "</td></tr>");

});


}); // termino getjson





  });


});




}); //termino jquery