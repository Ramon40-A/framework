//inicio jquery
$( document ).ready(function() {

        


//obtengo JSON Y LLENO LA grilla
$.getJSON( "deleteprofesores.php", function( data ) {



//recorro cajon de profesores y lo lleno
$.each(data.profesores, function( indice, valor ) {

$("#registros").append("<tr><td>"+ valor.idprofesores + "</td><td>"+ valor.nombre + "</td><td>"+ valor.apellido + "</td><td>" + valor.asignatura 
	+ "</td><td><div class='btn-group'> <a data-id='"+valor.idprofesores+"'  class='mod btn btn-primary'>Modificar</a></div></td><td><div class='btn-group' > <a data-id='"+valor.idprofesores+"'  class='btn btn-danger'>Eliminar</a></div></td></tr>");


});

// EVENTO CLICK DESPUES DE CARGAR LA GRILLA CON LOS <a> DE LOS REGISTROS CON DATA-ID

$('a').click(function(){

var id=$(this).attr('data-id');

alert('Presionaste el registro '+id);
   
});


}); // termino getjson



//obtengo JSON Y LLENO SELECT CON LAS ASIGNATURAS
$.getJSON( "asignaturas.php", function( data ) {


//recorro cajon de profesores y lo lleno
$.each(data.asignaturas, function( indice, valor ) {

$("#asignatura").append("<option value='"+valor.idasignaturas+"'>"+valor.asignaturascol+"</option>");

});


}); // termino getjson












}); //termino jquery