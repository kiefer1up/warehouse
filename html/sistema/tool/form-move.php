<div class='card bg-1'>
  <h3>Mover existencia</h3>
<hr>
  <form method="POST" id="f-xyz">
<input id="tk" value='<?php echo $_SESSION['user_id']?>' type="hidden">
<input id="cli" value='1' type="hidden">
<button type="button" id="myBtn" class="btn btn-add fa fa-plus"></button>
  </form>
<hr>
<?php include "modal-move.php"?>
<table>
<thead>
    <tr><th>Cod</th><th>Name</th><th>Quantity</th><th>Location</th><th>Q</th><th>Action</th></tr>
</thead>    
<tbody id="detalle"></tbody>
</table>
  <button type="submit" class="btn-add fa fa-bolt" id="b-order"></button>
</div>
