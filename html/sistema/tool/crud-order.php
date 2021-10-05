<?php
include ('../../conexion.php');
session_start();
$crud=$_POST['crud'];
$ot=$_POST['ot'];
$tk=$_SESSION['user_id'];
//read or search
if($crud=='r' or $crud=="rdt"){
  $query  = "CALL crud_order('$crud',$ot)";
  $result =mysqli_query($conexion,$query);
  if(!$result){die('null'.mysqli_error($conexion));}
  $json   = array();
  if($crud=="r"){ 
    while($row  = mysqli_fetch_array($result)){
      $json[] = array(
        'id'  => $row['id'],
        'date'  => $row['date'],
        'type'  => $row['type'],
        'cl'  => $row['cl'],
        'user'  => $row['user'],
      );
    }
  }
  if($crud=="rdt"){
    while($row  = mysqli_fetch_array($result)){
      $json[] = array(
        'pd'  => $row['pd'],
        'nm'  => $row['name'],
        'tp'  => $row['tp'],
        'xyz'  => $row['xyz'],
        'q'  => $row['q'],
      );
    } 
  } 
  $jsonstring = json_encode($json);
  echo $jsonstring;
}
mysqli_close($conexion);
?>

