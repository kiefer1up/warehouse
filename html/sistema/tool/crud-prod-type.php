<?php
include ('../../conexion.php');
session_start();
    $crud=$_POST['crud'];
    $id=$_POST['id'];
    $nam=$_POST['name'];
//read or search
    if($crud=='r' or $crud=="s"){    
        $query  = "CALL crud_prod_tp('$crud',$id,'$nam')";
        $result =mysqli_query($conexion,$query);
        if(!$result){die('null'.mysqli_error($conexion));}
        $json   = array();
        while($row  = mysqli_fetch_array($result)){
            $json[] = array(
            'id'        => $row['id'],
            'name'      => $row['name']
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
// create update delete
    if($crud=="c" or $crud=="u" or $crud=="d"){    
    $query  = "CALL crud_pcat('$crud',$id,'$nam')";
    $result =mysqli_query($conexion,$query);
    if(!$result){
        die('null'.mysqli_error($conexion));
    }
    }
mysqli_close($conexion);
?>
