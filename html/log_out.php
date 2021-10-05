<html>
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<?php 
	session_start();
	session_destroy();
	header("location:index.php");
?>
	
</body>
</html>