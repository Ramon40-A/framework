<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Calculadora extends CI_Controller {

	/**
	 * Desarrollador: Ramon Ojeda
	 * Descripcion: controlador para calcular numeros.
	 *
	 *
	 */


	public function index()
	{
		
	}



public function sumar($numero1,$numero2){

$datos = array();

$resultado;
$resultado = $numero1 + $numero2;


$datos['resultado']= $resultado;
$datos['nombre']='ramon';
$datos['apellido']='ojeda';
$datos['edad']=40;

$this->load->view('calculadora',$datos);



}


}

?>