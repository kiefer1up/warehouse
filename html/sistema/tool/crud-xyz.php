<?php
include ('../../conexion.php');
session_start();
$crud=$_POST['crud'];
$id=$_POST['id'];
$xyz=$_POST['xyz'];
//read or search
if($crud=='r' or $crud=="s"){
  $query  = "CALL crud_xyz('$crud','$xyz')";
  $result =mysqli_query($conexion,$query);
  if(!$result){die('null'.mysqli_error($conexion));}
  $json   = array();
  while($row  = mysqli_fetch_array($result)){
    $json[] = array(
      'id'  => $row['id'],
      'xyz' => $row['xyz'],
      'q'   => $row['q']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
}
//read xyz wstock
if($crud=="rxyz" or $crud="rxyzid"){
  $query  = "CALL crud_xyz('$crud',$id,'$xyz')";
  $result =mysqli_query($conexion,$query);
  if(!$result){die('null'.mysqli_error($conexion));}
  $json   = array();
  
  if($crud=="rxyz"){ 
    while($row  = mysqli_fetch_array($result)){
      $json[] = array(
        'id'  => $row['id'],
        'name'   => $row['name']
      );
    } 
  }
  if($crud=="rxyzid"){ 
    while($row  = mysqli_fetch_array($result)){
      $json[] = array(
        'id'   => $row['id'],
      );
    } 
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
}
// create update delete
if($crud=="c" or $crud=="u" or $crud=="d"){    
  $query  = "CALL crud_xyz('$crud','$xyz')";
  $result =mysqli_query($conexion,$query);
  if(!$result){
    die('null'.mysqli_error($conexion));
  }
}
mysqli_close($conexion);
?>
