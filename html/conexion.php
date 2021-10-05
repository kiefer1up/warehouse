<?php  	
	$db_host="mysql8:3306";
	$db_usuario="root";
	$db_contra="pini";
	$db_basedatos="duarcon";

	$conexion=mysqli_connect($db_host,$db_usuario,$db_contra,$db_basedatos);

	if (!$conexion) {
		echo "Error en la conexión";
	}
?>
