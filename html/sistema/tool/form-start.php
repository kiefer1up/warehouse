<h4>Caja</h4>
<form method="POST" id="f-prov">
    <select id="prov"></select>
    <input placeholder="Cantidad"type="text" id ="q">
</form>
<form method="POST" id="f-xyz">        
    <input placeholder="ubicacion" id ="xyz" >
</form>

<form method="POST"id="f-prod">
    <input placeholder="cod" type="text" id ="id" >
    <button type="submit" class="btn-success fa fa-plus" id="btn-prod"></button>
</form>

<table class="table">
    <tr>
        <th>cod</th><th>Name</th><th>Quantity</th><th>Location</th><th>Action</th>
    </tr>
<tbody id="detalle"></tbody>
</table>
<form>
    <button type="submit" class="btn-success fa fa-bolt" id="btn-order"></button>
</form>
