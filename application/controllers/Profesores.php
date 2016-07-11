<?php

class Profesores extends CI_Controller {
	


public function index(){

//array para los datos

	$datos = array();

//cargamos el modelo
$this->load->model("Profesores_Model");

$datos['lista_profesores']=$this->Profesores_Model->obtener_profesores();
$datos['nombre']='ramon';



$this->load->view('profesores_vista',$datos);

}




public function cursos($idcursoURL){

$this->load->helper('html');
$this->load->helper('form');


$datos= array();

$this->load->model("Cursos_Model");

$datos["lista_cursos"] = $this->Cursos_Model->obtener_cursos($idcursoURL);


//renderizar a la vista

$this->load->view('profesores_vista',$datos);



}




public function grilla_profesores()
{


$datos = array();
$this->load->model("Profesores_Model");
$datos["lista_profesores"] = $this->Profesores_Model->obtener_grilla_profes();

$this->load->view("grilla_profesores",$datos);




}






}



?>