<?php
include ('../../conexion.php');
session_start();
$crud=$_POST['crud'];
$cod=$_POST['cod'];
$id=$_POST['id'];
$nam=$_POST['name'];
$fon=$_POST['fono'];
$ema=$_POST['email'];
//read or search
if($crud=='r' or $crud=="rp" or $crud=="s"){    
  $query  = "CALL crud_prov('$crud',$cod,$id,'$nam','$fon','$ema')";
  $result =mysqli_query($conexion,$query);
  if(!$result){die('null'.mysqli_error($conexion));}
  $json   = array();
    while($row  = mysqli_fetch_array($result)){
      $json[] = array(
        'id'  => $row['id'],
        'name'=> $row['name'],
        'fon' => $row['fono'],
        'ema' => $row['email']
      );
    }
  $jsonstring = json_encode($json);
  echo $jsonstring;
}
// create update delete
if($crud=="c" or $crud=="u" or $crud=="d"){    
  $query  = "CALL crud_prov('$crud','$cod','$id','$nam','$fon','$ema')";
  $result =mysqli_query($conexion,$query);
  if(!$result){
    die('null'.mysqli_error($conexion));
  }
}
mysqli_close($conexion);
?>
