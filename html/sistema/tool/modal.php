<!--add prod-->
    <div class="modal" id="modal_add_prod"><div class="bodyModal">
    <form action="" method="post" name="form_add_prod" onsubmit="event.preventDefault(); sendDataProduct();">
    <h1>Agregar Producto</h1>
    <input type="" name="" id="" placeholder="Cod" required>
    <input type="" name="" id="" placeholder="Name" required>
    <button class="btn_green">Agregar</button>
    <a href="#" class="btn_green" onclick="closeModal();">Salir</a>
    </form></div></div>
<!--add cli-->
    <div class="modal" id="modal_add_cli"><div class="bodyModal">
    <form action="" method="post" name="form_add_cli" id="form_add_cli" onsubmit="event.preventDefault(); sendDataCli();">
    <h1>Agregar Cliente</h1>
    <input type="" name="" id="" placeholder="id" required>
    <input type="" name="" id="" placeholder="nombre" required>
    <input type="" name="" id="" placeholder="patente" required>
    <input type="" name="" id="" placeholder="contacto" required>
    <button class="btn_green">Agregar</button>
    <a href="#" class="btn_green" onclick="closeModal();">Salir</a>
    </form></div></div>
<!--add user-->
    <div class="modal" id="modal_add_user"> <div class="bodyModal">
    <form action="" method="post" name="form_add_user" id="form_add_user" onsubmit="event.preventDefault(); sendDataUser();">
    <h1>Agregar Usuario</h1>
    <input type="" name="" id="" placeholder="id" required>
    <input type="" name="" id="" placeholder="nombre" required>
    <input type="" name="" id="" placeholder="pass" required>
    <input type="" name="" id="" placeholder="pass repita" required>
    <button class="btn_green">Agregar</button>
    <a href="#" class="btn_green" onclick="closeModal();">Salir</a>
    </form></div></div>
<!--add prov-->
    <div class="modal" id="modal_add_prov"> 
    <div class="bodyModal">
    <form action="" method="post" name="form_add_prov" id="form_add_prov" onsubmit="event.preventDefault(); sendDataProv();">
    <h1>Agregar Proveedor</h1>
    <input type="" name="" id="" placeholder="id" required>
    <input type="" name="" id="" placeholder="nombre" required>
    <button class="btn_green">Agregar</button>
    <a href="#" class="btn_green" onclick="closeModal();">Salir</a>
    </form>
    </div></div>
<!--show dt-->
    <div class="modal" id="modal_show_dt"> 
    <div class="bodyModal">
    <form action="" method="post" name="table_show_dt" id="table_show_dt" onsubmit="event.preventDefault(); sendDatadt();">
    <h1>Detalle orden</h1>
    <table class="tbl">
        <tr><th>ot</th>
        <th>cod prod</th>
        <th>nombre</th>
        <th>ubicacion</th>
        <th>cantidad</th>
        </tr><tbody id="tbody_modal_show_dot"></table>
    <a href="#" class="btn_green" onclick="closeModal();">Salir</a>
    </form></div></div>
