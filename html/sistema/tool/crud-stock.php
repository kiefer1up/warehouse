<?php
include ('../../conexion.php');
session_start();
$crud=$_POST['crud'];
$cod=$_POST['cod'];
$pd=$_POST['pd'];
$q=$_POST['q'];
$xyz=$_POST['xyz'];
$tk=$_SESSION['user_id'];
//read or search
if($crud=='r' or $crud=="sx" or $crud=="sp" or $crud=="sq"){
  $query  = "CALL crud_stock('$crud','$cod','$pd',$q,'$xyz','$tk')";
  $result =mysqli_query($conexion,$query);
  if(!$result){die('null'.mysqli_error($conexion));}
  $json   = array();
  while($row  = mysqli_fetch_array($result)){
    $json[] = array(
      'id'  => $row['id'],
      'a'  => $row['a'],
      'b'  => $row['b'],
      'c'  => $row['c'],
      'name'  => $row['name'],
      'cp'  => $row['cp'],
      'xyz' => $row['xyz'],
      'q'   => $row['q'],
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
}
//read xyz wstock
if($crud=="rsxyz" or $crud=="rxyzid" or $crud=="ridxyz" or $crud=="rxyz"){
  $query  = "CALL crud_stock('$crud','$cod','$pd',$q,'$xyz','$tk')";
  $result =mysqli_query($conexion,$query);
  if(!$result){die('null'.mysqli_error($conexion));}
  $json   = array();
  
  if($crud=="rsxyz"){ 
    while($row  = mysqli_fetch_array($result)){
      $json[] = array(
        'id'   => $row['id'],
        'xyz'   => $row['xyz']
      );
    } 
  }
  if($crud=="rxyz"){ 
    while($row  = mysqli_fetch_array($result)){
      $json[] = array(
        'xyz'   => $row['xyz']
      );
    } 
  }
  if($crud=="rxyzid"){ 
    while($row  = mysqli_fetch_array($result)){
      $json[] = array(
        'id'   => $row['id'],
        'pd'   => $row['a'],
        'nm'   => $row['name'],
        'cp'   => $row['cp'],
        'xyz'   => $row['xyz'],
        'q'   => $row['q']
      );
    } 
  }
  if($crud=="ridxyz" ){ 
    while($row  = mysqli_fetch_array($result)){
      $json[] = array(
        'xyz'   => $row['xyz']
      );
    } 
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
}
mysqli_close($conexion);
?>
