<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>




<?php 




foreach ($lista_cursos->result() as $fila)
{
        echo $fila->nombrecurso."<br>";
}




?>


</body>
</html>