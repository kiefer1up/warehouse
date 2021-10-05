<div class='card bg-1'>
<h4>Caja</h4>
<form id="f-caja">
    <input id="id"  placeholder='codigo'></input>
    <input id="q"   placeholder='cantidad'></input>
<button id="#" type='submit' class="btn btn-add fa fa-plus"></button>
</form>
<?php include "modal-prod.php"?>
<table >
    <tr>
       <th>Cod</th><th>Nombre</th><th>Precio</th><th>Cant</th><th>S. Total</th><th>Action</th></tr>
<tbody id="detalle"></tbody>
</table>
<button id="btn-proc" type='submit' class="btn btn-add fa fa-bolt"></button>
</div>
