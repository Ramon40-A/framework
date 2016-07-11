//inicio jquery
$( document ).ready(function() {



//obtengo JSON
$.getJSON( "cursos.php", function( data ) {

console.log(data.cursos);

$.each(data.cursos, function( indice, valor ) {

$("#registros").append("<tr><td>"+ valor.id + "</td><td>"+ valor.nombrecurso + "</td></tr>");



});


}); // termino getjson



}); //termino jquery