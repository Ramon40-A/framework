<?php

class Cursos_Model extends CI_Model{
	

public function obtener_cursos($idcurso){


$where['idcursos']=$idcurso;

$query = $this->db->get_where('cursos',$where);

return $query;


}


}


?>