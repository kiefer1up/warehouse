<?php
include ('../../conexion.php');
session_start();
$cl=$_POST['cl'];
$ty=$_POST['ty'];
$tk=$_SESSION['user_id'];
//read or search
$query  = "CALL proc_order('$cl',$ty,'$tk')";
$result =mysqli_query($conexion,$query);
if(!$result){
  die(''.mysqli_error($conexion));
}
mysqli_close($conexion);
?>
