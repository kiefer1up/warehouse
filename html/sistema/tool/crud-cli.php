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
    if($crud=='r' or $crud=="s" or $crud=="rc"){    
        $query  = "CALL crud_cli('$crud',$cod,'$id','$nam','$ema','$fon')";
        $result =mysqli_query($conexion,$query);
        if(!$result){die('null'.mysqli_error($conexion));}
        $json   = array();
        
        if($crud=="rc"){ 
          while($row  = mysqli_fetch_array($result)){
            $json[] = array(
              'id'  => $row['id'],
              'name'   => $row['name']
            );
          }
        }
        if($crud=="r" || $crud=="s" ){ 
          while($row  = mysqli_fetch_array($result)){
            $json[] = array(
            'id'        => $row['id'],
            'rut'      => $row['rut'],
            'name'      => $row['name'],
            'emil'      => $row['email'],
            'fon'       => $row['fono']
            );
          }
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
// create update delete
    if($crud=="c" or $crud=="u" or $crud=="d"){    
    $query  = "CALL crud_cli('$crud',$cod,'$id','$nam','$ema','$fon')";
    $result =mysqli_query($conexion,$query);
    if(!$result){
        die('null'.mysqli_error($conexion));
    }
    }
mysqli_close($conexion);
?>
