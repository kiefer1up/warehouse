<aside>
  <div class="form_register">
  <h1>Buscar producto por Codigo</h1>
  <form method="POST">
  <input type="text" id ="iprd" name="iprd" placeholder="codigo">
  <input type="button" class="btn_save" id="send" value="enviar">
  <input type="reset" class="btn_save" name="borrar" value="borrar">
  </form>
  </div>
    <script type="text/javascript">
        $('#send').click(function(){
          var cod=document.getElementById('iprd').value;
          var ruta="iprd="+cod;
          $.ajax({
            type: 'POST',
            url: 'tool/s_stock.php',
            data: ruta,
          })
          .done(function(res){
            $('#respuesta').html(res)
          })
          .fail(function(){
            console.log("error");
          })
          .always(function(){
            console.log("complete");
          })
        });
    </script>
  <br><div id="respuesta"></div>
</aside>
