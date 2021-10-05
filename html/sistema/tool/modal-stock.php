<div id="myModal" class="modal">
  <div class="modal-content card bg-2">
    <form method="POST" class="modal-form" id="f-rec">
      <h4>Crear</h4>
      <h4>Editar</h4>
      <div class="form-line">
        <input placeholder='codigo' type="text" id ="id">
        <button id="m-btn-xyz" class="btn btn-add fa fa-plus"></button>
      </div>  
      <div class="form-line">
        <select placeholder="ubicacion" id ="xyz"></select>
        <input class='w60p' type="number" id ="q" placeholder="Cantidad"min="1" max="100">
      </div>  
      <div class="form-line">
        <span placeholder="cod"></span>
      </div>  
      <div class='modal-footer'>
        <?php include"modal/modal-footer-add.php";?>
      </div>
    </form>
  </div>
</div> 
