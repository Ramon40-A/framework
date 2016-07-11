<?php


Class Profesores_Model extends CI_Model
{
	

public function obtener_profesores(){


return $this->db->get('profesores');

}



public function obtener_grilla_profes(){


	$query = $this->db->query("SELECT * FROM profesores p JOIN asignaturas a ON p.asignaturas_idasignaturas = a.idasignaturas");

return $query;
}





}

?>