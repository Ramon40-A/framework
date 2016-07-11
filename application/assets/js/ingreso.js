
$( document ).ready(function() {




// cargo el JSON que se llama especialidad.php y obtengo el JSON en la variable data
$.getJSON( "especialidad.php" )
  .done(function( data ) {

//por cada elemento en data.especialidades...
$.each(data.especialidades, function( indice, valor ) {

$("#especialidad").append("<option value='"+valor.id+"'>"+valor.especialidad+"</option>");
 

}); 







  }); 





});