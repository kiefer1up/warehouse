<?php
include ('../../conexion.php');
    $xyz=$_POST['id'];
    $query  = "CALL list_xyz_id('$xyz')";
    $result =mysqli_query($conexion,$query);
    mysqli_close($conexion);
    $data=mysqli_fetch_assoc($result);
    $jsonstring = json_encode($data);
    echo $jsonstring;
?>
