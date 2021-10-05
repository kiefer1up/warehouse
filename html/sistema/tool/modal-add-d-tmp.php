<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Open modal
  </button>

  <!-- The Modal -->
  <div class="modal" id="modal-add-d-tmp">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Modal Heading</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">

            <form method="POST" class="form-inline" id="form-rec">
            <div class="form-group">
            <input  class="form-control form-control-sm col mb-2 mr-sm-2" placeholder="cod" type="text" id ="id_add_prod_in" >
            <label  class="form-control form-control-sm col mb-2 mr-sm-2" id ="name_add_prod_in" name ="name_add_prod_in">Descripcion</label>
            <input  class="form-control form-control-sm col mb-2 mr-sm-2" placeholder="Cantidad"type="text" disabled required id ="q_add_prod_in">
            <select class="form-control form-control-sm col mb-2 mr-sm-2"  id="xyz_add_prod_in"><option value="0">--</option></select>
            <button type="submit" class="btn btn-sm btn-outline-success col mb-2 mr-sm-2">Producto</button>
            </div>
            </form>
            
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
