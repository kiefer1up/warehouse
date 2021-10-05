<?php
	$busqueda=$_POST["nameprd"];
	require("../../conexion.php");
	$resultados=mysqli_query($conexion,"SELECT * FROM producto WHERE NOMBRE LIKE '%$busqueda%'");
?>
	<table class="tbl">
	<tr>
		<th>Codigo</th>
		<th>Nombre</th>
		</tr>
<?php
	while($fila=mysqli_fetch_array($resultados, MYSQLI_ASSOC)){
	echo '<tr>
		<td>'.$fila['ID_PROD'] .'</td>
    <td>'.$fila['NOMBRE'] .'</td>
	</tr>';
	}
	mysqli_close($conexion);
?>

</table>
