<?php
include ('../../conexion.php');
session_start();
    $crud=$_POST['crud'];
    $cod=$_POST['cod'];
    $idp=$_POST['idprod'];
    $q=$_POST['q'];
    $typ= 1;
    $tok= $_SESSION['user_id'];

//read or search
    if($crud=='r' or $crud=="s"){
        $query  = "CALL crud_caja('$crud',$cod,'$idp',$q,$typ,'$tok')";
        $result =mysqli_query($conexion,$query);
        if(!$result){die('null'.mysqli_error($conexion));}
        $json   = array();
        while($row  = mysqli_fetch_array($result)){
            $json[] = array(
            'cod'       => $row['id'],
            'id'        => $row['id_prod'],
            'name'      => $row['name'],
            'precio'    => $row['precio'],
            'q'         => $row['q'],
            'subtotal'        => $row['subtotal']
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
// create update delete
    if($crud=="c" or $crud=="u" or $crud=="d"){    
        $query  = "CALL crud_caja('$crud',$cod,'$idp',$q,$typ,'$tok')";
        $result =mysqli_query($conexion,$query);
        if(!$result){
        die('null'.mysqli_error($conexion));
    }
    }
mysqli_close($conexion);
?>
