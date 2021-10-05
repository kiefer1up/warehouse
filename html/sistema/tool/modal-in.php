<div id="myModal" class="modal">
  <div class="modal-content card bg-2">
    <form method="POST" class="modal-form" id="f-rec">
      <h4>Crear</h4>
      <h4>Editar</h4>
      <hr>
        <div class="form-line">
          <input placeholder='codigo' type="text" id ="id">
        </div>  
      <div class="form-line">
        <select placeholder="ubicacion" id ="xyz"></select>
        <input type="number" id ="q" placeholder="Cantidad"min="1" max="100">
      </div>  
        <?php include"modal/modal-footer-add.php";?>
    </form>
  </div>
</div> 
