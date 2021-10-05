<?php
$alert='';
session_start();
if(!empty($_SESSION['active']))
	{
	header('location: sistema/');
	}else{
	if(!empty($_POST)){
		if(empty($_POST['user']) || empty($_POST['pass']))
			{$alert='ingrese usuario y contraseña';
			}else{
				require_once "conexion.php";
				$user=mysqli_real_escape_string($conexion,$_POST['user']);
				$pass=md5(mysqli_real_escape_string($conexion,$_POST['pass']));
				$query=mysqli_query($conexion,"SELECT * FROM user WHERE id = '$user' AND pass ='$pass' ");
				$result= mysqli_num_rows($query);

				if($result > 0){
					$data = mysqli_fetch_array($query);

					$_SESSION['active'] =true;
					$_SESSION['user_id'] =$data['id'];
					$_SESSION['name'] =$data['name'];
					$_SESSION['pass'] =$data['pass'];
					$_SESSION['rol'] = $data['rol'];

					header('location: sistema/');
				}else{
					$alert='Clave o usuario incorrecto';
					session_destroy();
				}
			}
		}
		}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="sistema/css/style.css">
	<script type="text/javascript" src="sistema/js/jquery-3.5.1.min.js"></script>
	<script src="sistema/js/main.js"></script>
	<?php
	  include "sistema/js/function.php";
	?>
	<title>DUARCON</title>
    </head>
<body class="bg-dark-x">
<div class='card bg-1'>
  <form class="f-down" action="" method="post">            
    <h3>Duarcon</h3>
    <input type="text" name="user" placeholder="usuario">
    <input type="password" name="pass" placeholder="contraseña">
    <button class="btn-add" type="submit">Ingresar</button>
  </form>
<!--   <div class="alert alert-success"><?php echo (isset($alert) ? $alert: ''); ?></div>-->
</div>
</body>
</html>
