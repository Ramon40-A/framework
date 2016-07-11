$( document ).ready(function() {



$.get( "valida_sesion.php" )
  .done(function( data ) {
    
if(data == 0){

window.location = 'index.html';

}

if(data == 1){



}





  });




	});