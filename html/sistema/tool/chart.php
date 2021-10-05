<?php
$a=5;
exec('Rscript /var/www/duarcon/sistema/Rs/sample.R '.$a);
echo '<img src="Rs/test.png" alt="Stickman" width="500" height="500">';
?>
