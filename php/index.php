<?php
$host = 'db';
$user = 'root';
$password = 'pini';
$db = 'duarcon';

$conn = new mysqli($host,$user,$password,$db);
if($conn->connect_error){
  echo 'connection failed' . $conn->connect_error;
}
echo 'connection bkn';
?>
