<div class='card'>
<h4>Usuarios</h4>
<hr>
<div class='form-line'>
<form>
<button id="myBtn" class="btn btn-add fa fa-plus"></button>
</form>
</div>
<hr>
<div class='form-line'>
<form id=f-find>
<input id="search" class="search" type="text" placeholder="buscar">
<button type="submit" class="btn btn-search fa fa-search"></button>
</form>
</div>
<hr>
<?php include "modal-user.php"?>
<table>
<thead>
    <tr>
      <th>Id</th><th>Nombre</th><th>Contacto</th><th>Rol</th><th>Action</th></tr>
</thead>
<tbody id="detalle"></tbody>
</table>
</div>
