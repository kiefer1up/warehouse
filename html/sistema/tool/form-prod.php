<div class='card'>
<h4>Productos</h4>
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
<?php include "modal-prod.php"?>
<table>
<thead>
    <tr>
       <th>Id</th><th>cod1</th><th>cod2</th><th>Nombre</th><th>Tipo producto</th><th>Action</th></tr>
</thead>
<tbody id="detalle"></tbody>
</table>


</div>
