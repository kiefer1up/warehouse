<?php
$a=5;
$ou=exec('Rscript /var/www/duarcon/sistema/Rs/sample.R 5');
echo"<pre>$ou</pre>";
echo '<img src="../Rs/test.png" alt="Stickman" width="400" height="400">';
var_dump($a);
//echo '<img src="Rs/test.png" alt="Stickman" width="400" height="400">';

?>
