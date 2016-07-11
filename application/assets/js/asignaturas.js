//inicio jquery
$( document ).ready(function() {



//obtengo JSON
$.getJSON( "asignaturas.php", function( data ) {

console.log(data.asignaturas);

$.each(data.asignaturas, function( indice, valor ) {

$("#registros").append("<tr><td>"+ valor.idasignaturas + "</td><td>"+ valor.asignaturascol + "</td></tr>");



});


}); // termino getjson



}); //termino jquery