<div class='card bg-1'>
    <h3>Inventario</h3>
<hr>
<form method="POST" id="f-xyz">
  <div class="form-line">
    <h4>Ubicacion</h4>
<input id="tk" value='<?php echo $_SESSION['user_id']?>' type="hidden">
<input id="cli" value='1' type="hidden">
  <select id ="xyz"></select>
  </div>  
  <div class="form-line">
    <button type="submit" class="btn-add fa fa-plus"></button>
    <button id='b-emp-xyz' class="btn-delete fa fa-trash"></button>
  </div>  
</form>
<hr>
<form method="POST">
  <div class="form-line">
    <h4>Agrear producto</h4>    
<button id="myBtn"class='btn-add fa fa-plus'></button>
  </div>  
</form>
<hr>
<?php include "modal-inv.php"?>
<table id="table-hide">
<thead>
    <tr><th>Cod</th><th>Name</th><th>cP</th><th>Ubic</th><th>Cant</th><th>Action</th></tr>
</thead>    
<tbody id="detalle"></tbody>
</table>
    <button type="submit" class="btn-add fa fa-bolt" id="b-order"></button>
</div>
