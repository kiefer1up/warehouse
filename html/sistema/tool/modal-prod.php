<div id="myModal" class="modal">
  <div class="modal-content">
    <form method="POST" class="modal-form" id="f-rec">
        <h4>Crear</h4>
        <h4>Actualizar</h4>
        <input id ="id"     type="text" placeholder="id">
        <input id ="name"   type="text" placeholder="nombre">
        <input id ="tprod" type="text" placeholder="categoria">
        <input id ="price" type="text" placeholder="precio">
        <div class='modal-footer'>
            <?php include"modal/modal-footer-add.php";?>
        </div>
    </form>
  </div>
</div> 
