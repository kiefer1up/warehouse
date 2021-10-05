<?php
    include ('../../conexion.php');
    $query  = "CALL list_xyz";
    $result =mysqli_query($conexion,$query);
    mysqli_close($conexion);

    while($row  = mysqli_fetch_assoc($result)){
?>
    <img src="../js/barcode.php?text=<?php echo $row['UBICACION']; ?>&size=50&orientation=horizontal&print=true&sizefactor=1"/>

<?php } ?>
