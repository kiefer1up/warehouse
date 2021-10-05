<div id="myModal" class="modal">
  <div class="modal-content card bg-2">
    <form method="POST" class="modal-form" id="f-rec">
        <h4>Crear</h4>
        <h4>Actualizar</h4>
        <hr> 
        <p id="mid" style="display:none;"></p>
        <input id ='mpd' placeholder="Codigo" type="text" >
        <input id ="mnm" style="display:none;" min="1" max="100">
        <input id ="mcp" style="display:none;" min="1" max="100">
        <input id ="mxyz" style="display:none;" min="1" max="100">
        <input id ="mq" placeholder="Cantidad"min="1" max="100">
          <?php include"modal/modal-footer-add.php";?>
        </div>
    </form>
  </div>
</div> 
