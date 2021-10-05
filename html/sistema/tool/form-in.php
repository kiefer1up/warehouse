<div class='card bg-1'>
  <h3>Recepcion</h3>
<hr>
<form method="POST" id="#">
  <div class="form-line">
    <h4>Proveedor</h4>    
    <select id="prov"></select>
  </div>  
  <div class="form-line">
    <button id="myBtn" class="btn btn-add fa fa-plus"></button>
  </div>  
  </form>
<hr>
  <?php include "modal-in.php"?>
<table>
  <tr>
    <th>cod</th><th>Name</th><th>Tipo</th><th>Location</th><th>Quantity</th><th>Action</th>
  </tr>
  <tbody id="detalle"></tbody>
</table>
    <button type="submit" class="btn-add fa fa-bolt" id="btn-order"></button>
</div>
