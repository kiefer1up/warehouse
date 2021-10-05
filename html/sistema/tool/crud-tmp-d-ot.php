<?php
include ('../../conexion.php');
session_start();
$crud=$_POST['crud'];
$cod=$_POST['cod'];
$pd=$_POST['pd'];
$q=$_POST['q'];
$xyz=$_POST['xyz'];
$ty=$_POST['ty'];
$tk=$_SESSION['user_id'];
//read or search
if($crud=='r' or $crud=="s"){
  $query  = "CALL crud_tmp_d_ot('$crud',$cod,'$pd',$q,'$xyz','$tk',$ty)";
  $result =mysqli_query($conexion,$query);
  if(!$result){die('null'.mysqli_error($conexion));}
  $json   = array();
  while($row  = mysqli_fetch_array($result)){
    $json[] = array(
      'id'    => $row['id'],
      'pd'    => $row['cod'],
      'nm'    => $row['name'],
      'cP'    => $row['cP'],
      'xyz'   => $row['xyz'],
      'q'     => $row['q']
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
}
// create update delete
if($crud=="c" or $crud=="u" or $crud=="d" or $crud=="cxyz" or $crud=="cmxyz" or $crud=="dxyz"){    
  $query  = "CALL crud_tmp_d_ot('$crud',$cod,'$pd',$q,'$xyz','$tk',$ty)";
  $result =mysqli_query($conexion,$query);
  if(!$result){
    die('null'.mysqli_error($conexion));
  }
}
mysqli_close($conexion);
?>
