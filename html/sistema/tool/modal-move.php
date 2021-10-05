<div id="myModal" class="modal">
  <div class="modal-content card bg-2">
    <form method="POST" class="modal-form" id="f-rec">
      <h4>Crear</h4>
      <h4>Actualizar</h4>
      <hr>
    <form>
      <h4>Desde</h4>
      <div class="form-line">
        <select type="text" id ="xyz1"></select>
      </div>
      <div class="form-line">
        <button id='b-xyz1' class="btn-add fa fa-plus"></button>  
      </div>
    </form>
    <form>
      <hr>  
        <h4>Productos en ubicacion</h4>
      <div class="form-line">
        <select type="text" id ="id"></select>
        <input type="number" id ="q" placeholder="Cantidad"min="1" max="100">
      </div>
      <hr>  
        <h4>Hacia</h4>
      <div class="form-line">
        <select type="text" id ="xyz2"></select>
      </div>  
    </form>
    <form>
        <?php include"modal/modal-footer-add.php";?>
    </form>
    </form>
  </div>
</div> 
