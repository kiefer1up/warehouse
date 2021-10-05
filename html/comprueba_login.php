<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>login </title>
	<link rel="stylesheet" type="text/css" href="sistema/css/style.css">

</head>
<body>
<?php
	try{
		$base=new PDO("mysql:host=localhost; dbname=duarcon","root","pini");
		$base->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		$sql="SELECT * FROM user WHERE ID_USUARIO= :login AND PASSWORD= :password";
		$resultado=$base->prepare($sql);
		$login=htmlentities(addslashes($_POST["login"]));
		$password=htmlentities(addslashes($_POST["password"]));
		$resultado->bindValue(":login",$login);
		$resultado->bindValue(":password",$password);
		$resultado->execute();

		$numero_registro=$resultado->rowCount();

		if($numero_registro!=0){
			session_start();
			$_SESSION["usuario"]=$_POST["login"];
			header("location:menu1.php");

		}else{
			header("location:index.php");
		}

	}catch(Exception $e){
		die("error: ". $e->getMessage());
	}

?>
</body>
</html>
