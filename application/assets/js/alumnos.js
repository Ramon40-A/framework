//inicio jquery
$( document ).ready(function() {



//obtengo JSON
$.getJSON( "alumnos.php", function( data ) {

console.log(data.alumnos);

$.each(data.alumnos, function( indice, valor ) {

$("#registros").append("<tr><td>"+ valor.idalumnos + "</td><td>"+ valor.nombre + "</td><td>"+ valor.apellido + "</td><td>" + valor.curso + "</td></tr>");



});


}); // termino getjson



}); //termino jquery