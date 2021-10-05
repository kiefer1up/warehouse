<?php
include ('../../conexion.php');
session_start();
    $crud=$_POST['crud'];
    $cod=$_POST['cod'];
    $id=$_POST['id'];
    $nam=$_POST['name'];
    $pas=md5($_POST['pas']);
    $rol=$_POST['rol'];
    $cont=$_POST['cont'];
    $tbl='user';
//read or search
    if($crud=='r' or $crud=="s"){    
        $query  = "CALL crud_user('$crud','$cod','$id','$nam','$pas','$rol','$cont')";
        $result =mysqli_query($conexion,$query);
        if(!$result){die('null'.mysqli_error($conexion));}
        $json   = array();
        while($row  = mysqli_fetch_array($result)){
            $json[] = array(
            'id'    => $row['user_id'],
            'name'  => $row['name'],
            'rol'   => $row['rol'],
            'con'   => $row['cont']
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
// create update delete
    if($crud=="c" or $crud=="u" or $crud=="d"){    
        $query  = "CALL crud_user('$crud','$cod','$id','$nam','$pas','$rol','$cont')";
        $result =mysqli_query($conexion,$query);
        if(!$result){
        die('null'.mysqli_error($conexion));
    }
    }
mysqli_close($conexion);
?>
