<?php
include ('../../conexion.php');
session_start();
    $crud=$_POST['crud'];
    $cod=$_POST['cod'];
    $id=$_POST['id'];
    $nam=$_POST['name'];
    $typ=$_POST['ty'];
//read or search
    if($crud=='r' or $crud=="s"){
      $query  = "CALL crud_prod('$crud',$cod,'$id','$nam',$typ)";
    $result =mysqli_query($conexion,$query);
    if(!$result){die('null'.mysqli_error($conexion));}
    $json   = array();
    while($row  = mysqli_fetch_array($result)){
          $json[] = array(
          'id'    => $row['id'],
          'a'    => $row['a'],
          'b'    => $row['b'],
          'c'    => $row['c'],
          'name'  => $row['name'],
          'typ'   => $row['tipo']
          );
      }
      $jsonstring = json_encode($json);
    echo $jsonstring;
    }
// create update delete
    if($crud=="c" or $crud=="u" or $crud=="d"){    
        $query  = "CALL crud_prod('$crud','$cod','$id','$nam','$typ')";
        $result =mysqli_query($conexion,$query);
        if(!$result){
        die('null'.mysqli_error($conexion));
    }
    }
mysqli_close($conexion);
?>
