<?php
include ('../../conexion.php');
session_start();
$cl=$_POST['cl'];
$ty=$_POST['ty'];
$tk=$_SESSION['user_id'];
//read or search
$query  = "CALL proc_ot($cl,$tk,$ty)";
$result =mysqli_query($conexion,$query);
if(!$result){
  die('null'.mysqli_error($conexion));
}
mysqli_close($conexion);
?>
