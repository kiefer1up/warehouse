<h3>Despacho rapido</h3>
<input id="prov" value="1" hidden>
<form method="POST" id="f-xyz">        
    <input placeholder="ubicacion" type="text" id ="xyz" >
</form>
<form method="POST" id="f-q">        
    <input placeholder="Cantidad" type="text" id ="q" value="1">
</form>
<form method="POST" id="f-prod">
    <select placeholder="cod" type="text" id ="id"></select>
    <button class="btn-success fa fa-plus" id="b-prod"></button>
</form>
<table>
    <tr>
        <th>cod</th><th>Name</th><th>Quantity</th><th>Location</th><th>Action</th>
    </tr>
<tbody id="detalle"></tbody>
</table>
    <button type="submit" class="btn-success fa fa-bolt" id="b-order"></button>
