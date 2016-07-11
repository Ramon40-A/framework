<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Profesores</title>

    <!-- Bootstrap -->
    
    <link rel="stylesheet" href="<?php echo base_url("assets/css/bootstrap.css"); ?>" />
  </head>
  <body>
    <h1>PROFESORES</h1>





<div class="panel panel-default">
<div class="panel-heading">Profesores</div>
<table class="table">
<thead>

 <tr>
 <th>ID</th>
 <th>Nombre</th>
 <th>Apellido</th>
 <th>Asignatura</th>
 </tr>

 </thead>

 <tbody >

<?php
//print_r($lista_profesores->result());
foreach ($lista_profesores->result() as $fila)
{
        echo "<tr><td>$fila->idprofesores</td>";
        echo "<td>$fila->nombre</td>";
        echo "<td>$fila->apellido</td>";
        echo "<td>$fila->asignaturascol</td></tr>";
}

?>

 

 </tbody>

 </table>
 </div>

<form  id="formulario2">



<div class="row">

  <div class="col-md-3">
  
  <input type="text" name="nombre" placeholder="Nombre">

  </div>

  <div class="col-md-3">
 
  <input type="text" name="apellido" placeholder="Apellido">  

  </div>

  <div class="col-md-3">
    
    <select id="asignatura" name="asignatura" class="form-control">
      

    </select>

  </div>

  <div class="col-md-3">
    
    <input type="button" class="btbn tn-primary" value="Ingresar Profesor" name="boton2" id="boton2">

  </div>
 
</div>




</form>

  

  </body>
</html>



