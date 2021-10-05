<div id="myModal" class="modal">
  <div class="modal-content">
    <form method="POST" class="modal-form" id="f-rec">
        <h4>Crear</h4>
        <h4>Actualizar</h4>
        <p id="id" style="display:none;"></p>
        <input id ="rut"     type="text" placeholder="rut">
        <input id ="name"   type="text" placeholder="nombre">
        <input id ="contac" type="text" placeholder="contacto">
        <input id ="patente"type="text" placeholder="patente">
        <div class='modal-footer'>
            <?php include"modal/modal-footer-add.php";?>
        </div>
    </form>
  </div>
</div> 
