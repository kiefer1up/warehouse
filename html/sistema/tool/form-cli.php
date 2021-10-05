<div class='card'>
<h4>Clientes</h4>
<hr>
<form>
<div class='form-line'>
<button id="myBtn" class="btn btn-add fa fa-plus"></button>
</div>
</form>
<hr>
<form id=f-find>
<div class='form-line'>
<input id="search" class="search" type="text" placeholder="buscar">
<button type="submit" class="btn btn-search fa fa-search"></button>
</div>
</form>
<hr>
<?php include "modal-cli.php"?>
<table>
    <tr>
       <th>Id</th><th>Nombre</th><th>Contacto</th><th>Patente</th><th>Action</th></tr>
<tbody id="detalle"></tbody>
</table>
</div>
