//inicio jquery
$( document ).ready(function() {

        


//obtengo JSON Y LLENO LA grilla
$.getJSON( "profesores.php", function( data ) {



//recorro cajon de profesores y lo lleno
$.each(data.profesores, function( indice, valor ) {

$("#registros").append("<tr><td>"+ valor.idprofesores + "</td><td>"+ valor.nombre + "</td><td>"+ valor.apellido + "</td><td>" + valor.asignatura 
	+ "</td><td><div class='btn-group'> <a data-id='"+valor.idprofesores+"' data-btn='mod'  class='mod btn btn-primary'>Modificar</a></div></td><td><div class='btn-group' > <a data-id='"+valor.idprofesores+"' data-btn='eli' class='btn btn-danger'>Eliminar</a></div></td></tr>");


});

// EVENTO CLICK DESPUES DE CARGAR LA GRILLA CON LOS <a> DE LOS REGISTROS CON DATA-ID

$('a').click(function(){

var id=$(this).attr('data-id');
var boton=$(this).attr('data-btn');


//apreto modificar
if(boton == 'mod'){

alert('apretaste modificar con el id '+id);

}

//apreto eliminar
if(boton == 'eli'){

// Enviar por post a deleteprofesores.php el id que presiono , este debe ser enviado con el nombre idprofesor por metodo POST

alert('apretaste eliminar con el id'+ id);


$.post( "deleteprofesores.php", { idprofesor: id } )
.done(function( data )
 {
  

alert(data);




  });

}





   
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