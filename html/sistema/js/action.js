$(document).ready(function() {

// busca vendedor keyup
	$('#sale_id').keyup(function() {
		var pro = $('#sale_id').val();
		var action = 'searchCli_in';
		$.ajax({
		url    : 'js/ajax.php',
		type   : "POST",
		async  : true,
		data   : {action:action,proveedor:pro},
		success: function(response){
		if (response != "noData") {
		var data = $.parseJSON(response);
		$('#prov_sale_name').val(data.name_sale);
		$('#prov_factory_name').val(data.id_prov);
		$('#prov_sale_contact').val(data.contacto);
		$('#prov_sale_name').attr('disabled','disabled');
		$('#prov_factory_name').attr('disabled','disabled');
		$('#prov_sale_contact').attr('disabled','disabled');
		$('#reg_ven').slideUp();
		}else {
		$('#prov_sale_name').val('');
		$('#prov_factory_name').val('');
		$('#prov_sale_contact').val('');
		$('#prov_sale_name').removeAttr('disabled');
		$('#prov_factory_name').removeAttr('disabled');
		$('#prov_sale_contact').removeAttr('disabled');
		$('#reg_ven').slideDown();
		}
		},
		error: function(error){
		}
		});
		});
// registra vendedor en recepcion
        $('#datos_recepcion').submit(function(e) {
                e.preventDefault();
                $.ajax({
                url: 'js/ajax.php',
                type: 'POST',
                async: true,
                data: $('#datos_recepcion').serialize(),
                success:function(response){
                if (response != 'error'){
                $('#sale_id').val(response);
                $('#prov_sale_name').attr('disabled','disabled');
                $('#prov_factory_name').attr('disabled','disabled');
                $('#prov_sale_contact').attr('disabled','disabled');
                $('#reg_ven').slideUp();}},
                error:function(error){}
                });});
// busca cliente keyup
	$('#cli_rut').keyup(function() {
		var  cl = $('#cli_rut').val();
		var action = 'searchCli_out';
		$.ajax({
		url    : 'js/ajax.php',
		type   : "POST",
		async  : true,
		data   : {action:action,cliente:cl},
		success: function(response){
		if (response != "noData") {
		var data = $.parseJSON(response);
		//$('#cli_id').val(data.cli_id);
		$('#cli_name').val(data.cli_name);
		$('#patente').val(data.patente);
		$('#cli_contact').val(data.contacto);
		$('#cli_name').attr('disabled','disabled');
		$('#patente').attr('disabled','disabled');
		$('#cli_contact').attr('disabled','disabled');
		$('#reg_cli').slideUp();
		}
		else {
		$('#cli_id').val('');
		$('#cli_name').val('');
		$('#patente').val('');
		$('#cli_contact').val('');
		$('#reg_cli').slideDown();
		$('#cli_name').removeAttr('disabled');
		$('#patente').removeAttr('disabled');
		$('#cli_contact').removeAttr('disabled');}},
		error: function(error){}});});
// registra cliente en despach
	$('#datos_despacho').submit(function(e) {
		e.preventDefault();
		$.ajax({
		url: 'js/ajax.php',
		type: 'POST',
		async: true,
		data: $('#datos_despacho').serialize(),
		success:function(response){
		if (response != 'error'){
		//agrega id input
		$('#cli_id').val(response);
		//bloq campos
		$('#cli_name').attr('disabled','disabled');
		$('#patente').attr('disabled','disabled');
		$('#cli_contact').attr('disabled','disabled');
		$('#reg_cli').slideUp();}},
		error:  function(error){}
		});});
// busca prod keyup out
	$('#id_add_prod_out').keyup(function(e) {
		e.preventDefault();
		var producto = $(this).val();
		var action = 'searchprod_add_out';
		if (producto != ''){
		$.ajax({
		url    : 'js/ajax.php',
		type   : "POST",
		async  : true,
		data   : {action:action,producto:producto},
		success: function(response){
		if (response !='error'){
		var info = JSON.parse(response);
		$('#name_add_prod_out').html(info.prod_name);
		$('#stock_add_prod_out').html(info.stock_q);
		$('#btn_add_prod_out').slideDown();
		$('#q_add_prod_out').slideDown();}
		else{
		$('#name_add_prod_out').html('--');
		$('#stock_add_prod_out').html('--');
		$('#btn_add_prod_out').slideUp();
		$('#q_add_prod_out').slideUp();
		}},error: function(error){}});}});
// busca prod keyup in
	$('#id_add_prod_in').keyup(function(e) {
		e.preventDefault();
		var producto = $(this).val();
		var action = 'searchprod_add_in';
		if (producto != ''){
		$.ajax({
		url    : 'js/ajax.php',
		type   : "POST",
		async  : true,
		data   : {action:action,producto:producto},
		success: function(response){
		if (response !='error'){
		var info = JSON.parse(response);
		$('#name_add_prod_in').html(info.prod_name);
		$('#stock_add_prod_in').html(info.stock_q);
		$('#btn_add_prod_in').slideDown();
		$('#q_add_prod_in').slideDown();}
		else{
		$('#name_add_prod_in').html('--');
		$('#stock_add_prod_in').html('--');
		$('#btn_add_prod_in').slideUp();
		$('#q_add_prod_in').slideUp();
		}},error: function(error){}});}});
// busca prod ubi keyup out
	$('#id_add_prod_out').keyup(function(){
		var xyz = $(this).val();
		var action = 'searchprodz_add_out';
		$.ajax({
		url: 'js/ajax.php',
		type: 'post',
		data: {action:action,ubicacion:xyz},
		dataType: 'json',
		success:function(response){
		if (response != 'error'){
		var len = response.length;
		$("#xyz_add_prod_out").empty();
		$("#xyz_q_add_prod_out").empty();
		for( var i = 0; i<len; i++){
		var id = response[i]['stock_q'];
		var name = response[i]['stock_xyz_xyz'];
		$("#xyz_add_prod_out").append("<option value='"+name+"'>"+name+" = "+id+"</option>");
		$("#xyz_q_add_prod_out").append(id);}}
		else{
		$("#xyz_add_prod_out").empty();
		$("#xyz_add_prod_out").html('<option>--</option>');
		$("#xyz_q_add_prod_out").empty();
		}}});});
// busca prod ubi keyup in
	$('#id_add_prod_in').keyup(function(){
		var xyz = $(this).val();
		var action = 'searchprodz_add_in';
		$.ajax({
		url: 'js/ajax.php',
		type: 'post',
		data: {action:action,ubicacion:xyz},
		dataType: 'json',
		success:function(response){
		if (response != 'error'){
		var len = response.length;
		$("#xyz_add_prod_in").empty();
		$("#xyz_q_add_prod_in").empty();
		for( var i = 0; i<len; i++){
		var id = response[i]['stock_q'];
		var name = response[i]['stock_xyz_xyz'];
		$("#xyz_add_prod_in").append("<option value='"+name+"'>"+name+" = "+id+"</option>");
		$("#xyz_q_add_prod_in").append(id);}}
		else{
		$("#xyz_add_prod_in").empty();
		$("#xyz_add_prod_in").html('<option>--</option>');
		$("#xyz_q_add_prod_in").empty();
		}}});});
// validar Cantidad out
	$('#q_add_prod_out').keyup(function(e){
		e.preventDefault();
		var q = parseInt($("#stock_add_prod_out").html());
		// var action = 'val_q_prod_add_out';
		if ($(this).val() < 1 || ($(this).val() > q) )
		{
		$("#btn_add_prod_out").slideUp();
		}else {
		$("#btn_add_prod_out").slideDown();
		}
		});
// add_prod_out detalle
	$('#btn_add_prod_out').click(function(e){
		e.preventDefault();
		var id = $('#id_add_prod_out').val();
		var q = $('#q_add_prod_out').val();
		var action = 'add_prod_out_fac';
		var xyz = $('#xyz_add_prod_out').val();
		$.ajax({
		url    : 'js/ajax.php',
		type   : "POST",
		async  : true,
		data   : {action:action,cod:id,cant:q,xyz:xyz},
		success: function(response){
		if(response !='error'){
		var info = JSON.parse(response);
		console.log(info);	
		$('#id_add_prod_out').val('');
		$('#name_add_prod_out').html('--');
		$('#stock_add_prod_out').html('--');
		$('#btn_add_prod_out').slideUp();
		$('#q_add_prod_out').slideUp();
		$("#xyz_add_prod_out").empty();
		$("#xyz_add_prod_out").html('<option>--</option>');
		$('#detal_out').html(info.data);
		}else{ console.log('nodata');}},
		error: function(error){}});});
// add_prod_in detalle
		$('#btn_add_prod_in').click(function(e){
		e.preventDefault();
		var id = $('#id_add_prod_in').val();
		var q = $('#q_add_prod_in').val();
		var action = 'add_prod_in_fac';
		var xyz = $('#xyz_add_prod_in').val();
		$.ajax({
		url    : 'js/ajax.php',
		type   : "POST",
		async  : true,
		data   : {action:action,cod:id,cant:q,xyz:xyz},
		success: function(response){
		if(response !='error'){
		var info = JSON.parse(response);	
		$('#id_add_prod_in').val('');
		$('#name_add_prod_in').html('--');
		$('#stock_add_prod_in').html('--');
		$('#btn_add_prod_in').slideUp();
		$('#q_add_prod_in').slideUp();
		$("#xyz_add_prod_in").empty();
		$("#xyz_add_prod_in").html('<option>--</option>');
		$('#detal_in').html(info.data);	
		}else{ console.log('nodata');}},
		error: function(error){}});});
// proce_orden_in
	$('#btn_reg_order_in').click(function(e){
		e.preventDefault();
		var action = 'proc_order_in';
		var cli_id = $('#sale_id').val();
        var type_order = 0;
		$.ajax({
		url    : 'js/ajax.php',
		type   : "POST",
		async  : true,
		data   : {action:action,cli_id:cli_id,type_order:type_order},
		
		success: function(response){
		if(response != 'error'){
		var info = JSON.parse(response);
		$('#detal_in').html('');
		console.log(info);
		}else{
		}},error: function(error){}});});
//modal
	// modal add prod
		$('.add_prod').click(function(e){
		e.preventDefault();
		var producto = $(this).attr('cod');
		//alert(producto);
		$('#modal_add_prod').fadeIn();
		});
	// modal add cli 
		$('.add_cli').click(function(e){
		e.preventDefault();
		var producto = $(this).attr('id');
		//alert(producto);
		$('#modal_add_cli').fadeIn();
		});
	// modal add user
		$('.add_user').click(function(e){
		e.preventDefault();
		var producto = $(this).attr('id');
		//alert(producto);
		$('#modal_add_user').fadeIn();
		});
	// modal add prov
		$('.add_prov').click(function(e){
		e.preventDefault();
		var producto = $(this).attr('id');
		$('#modal_add_prov').fadeIn();});
    // modal show dot
		$('.show_dot').click(function(e){
		e.preventDefault();
		//var id = $(this).attr('id');
		$('#modal_show_dt').fadeIn();});
	//$.ajax({
	//	type    : "POST",
	//	url     : 'js/ajax.php',
	//	async   : true,
	//	data    : {action:action,id:id},    
	//	success: function(response){
	//	if(response !='error')
	//	{
	//	var info = JSON.parse(response);	   
	//	$('#show_ot').html(info.data);
	//	}else{ 
	//	$('#show_ot').html('');}},error: function(error){}});}
// buscar_mostrar_prod	
		$('#s_prod').keyup(function(e){
		e.preventDefault();
		var producto = $('#s_prod').val();
		var action = 'searchprod';
		var zelda = zelda;
		$.ajax({
		url    : 'js/ajax.php',
		type   : "POST",
		async  : true,
		data   : {action:action,producto:producto},
		success: function(response){
		if (response !='error'){
		var info = JSON.parse(response);
		//console.log(info);	
		$('#s_prod_tbody').empty();
		$('#s_prod_tbody').html(info.data);
		}else{console.log(response);
		$('#s_prod_tbody').html('NoData');
		}},error: function(error){}});});
// buscar_mostrar_prod_q_xyz	
		$('#s_prod_q_xyz').keyup(function(e){
		e.preventDefault();
		var id = $('#s_prod_q_xyz').val();
		var action = 'searchProdQ';
		var zelda = zelda;
		$.ajax({
		url    : 'js/ajax.php',
		type   : "POST",
		async  : true,
		data   : {action:action,id:id},
		success: function(response){
		if (response !='error'){
		var info = JSON.parse(response);
		//console.log(info);	
		$('#s_prod_q_xyz_tbody').empty();
		$('#s_prod_q_xyz_tbody').html(info.data);
		}else{console.log(response);
		$('#s_prod_q_xyz_tbody').html('NoData');
		}},error: function(error){}});});
// buscar_inventario_prod_xyz	
		$('#s_prod_xyz_inventario').keyup(function(e){
		e.preventDefault();
		var id = $('#s_prod_xyz_inventario').val();
		var action = 'searchProdXYZ';
		$.ajax({
		url    : 'js/ajax.php',
		type   : "POST",
		async  : true,
		data   : {action:action,id:id},
		success: function(response){
		if (response !='error'){
		var info = JSON.parse(response);
		//console.log(info);	
		$('#detal_inventario').empty();
		$('#detal_inventario').html(info.data);
		}else{console.log(response);
		$('#detal_inventario').html('NoData');
		}},error: function(error){}});});
// buscar_inventario_prod_xyz	
	function acc_prod_stock(id,xyz,q){
	e.preventDefault();
	var action = 'accProdXYZ';
	var q = q;
	var id = id;
	var xyz = xyz;
	    $.ajax({
	    url    : 'js/ajax.php',
	    type   : "POST",
        async  : true,
        data   : {action:action,id:id,q:q,xyz:xyz},
    success: function(response){},error: function(error){}});}
// buscar_mostrar_ot	
		$('#s_ot').keyup(function(e){
		e.preventDefault();
		var ot = $('#s_ot').val();
		var action = 'searchot';
		var zelda = zelda;
		$.ajax({
		url    : 'js/ajax.php',
		type   : "POST",
		async  : true,
		data   : {action:action,ot:ot},
		success: function(response){
		if (response !='error'){
		var info = JSON.parse(response);
		//console.log(info);	
		$('#s_ot_tbody').empty();
		$('#s_ot_tbody').html(info.data);
		}else{console.log(response);
		$('#s_ot_tbody').html('NoData');
		}},error: function(error){}});});
});// end ready
// funciones
// actualizaopen_detalle
	function searchForDetalle(id,zelda,orderType){
		var action = 'searchForDetalle';
		var user = id;
		var zelda = zelda;
		var orderType = orderType;
		$.ajax({
		type   	: "POST",
		url 	: 'js/ajax.php',
		async  	: true,
		data   	: {action:action,user:user,orderType:orderType},	
		success: function(response)
		{if(response !='error')
		{
		var info = JSON.parse(response);
		$(zelda).html(info.detalle);
		}else{ console.log('nodata');}
		},
		error: function(error){}
		});
		}
// start_show_user
	function searchForUser(zelda){
		var action = 'searchForUser';
		var zelda = zelda;
		$.ajax({
		type   	: "POST",
		url 	: 'js/ajax.php',
		async  	: true,
		data   	: {action:action},	
		success: function(response)
		{if(response !='error')
		{
		var info = JSON.parse(response);
		$(zelda).html(info.data);
		}else{ console.log('nodata');}
		},
		error: function(error){}
		});
		}
// elimina_user
	function user_errase(id){
		var action = 'delForUser';
		var id = id;
		$.ajax({
		type    : "POST",
		url     : 'js/ajax.php',
		async   : true,
		data    : {action:action,id:id},    
		success: function(response){
		if(response !='error')
		{
		var info = JSON.parse(response);	   
		$('#show_user').html(info.data);
		}else{ 
		$('#show_user').html('');}
		},
		error: function(error){}
		});
		}
// start_show_cli
	function searchForCli(zelda){
		var action = 'searchForCli';
		var zelda = zelda;
		$.ajax({
		type   	: "POST",
		url 	: 'js/ajax.php',
		async  	: true,
		data   	: {action:action},	
		success: function(response)
		{if(response !='error')
		{
		var info = JSON.parse(response);
		$(zelda).html(info.data);
		}else{ console.log('nodata');}
		},
		error: function(error){}
		});
		}
// start_show_ot
	function searchstartForOt(zelda){
		var action = 'searchstartForot';
		var zelda = zelda;
		$.ajax({
		type   	: "POST",
		url 	: 'js/ajax.php',
		async  	: true,
		data   	: {action:action},	
		success: function(response)
		{if(response !='error')
		{
		var info = JSON.parse(response);
		$(zelda).html(info.data);
		}else{ console.log('nodata');}
		},
		error: function(error){}
		});
		}
// elimina_cli
	function cli_errase(id){
		var action = 'delForCli';
		var id = id;
	$.ajax({
		type    : "POST",
		url     : 'js/ajax.php',
		async   : true,
		data    : {action:action,id:id},    
		success: function(response){
		if(response !='error')
		{
		var info = JSON.parse(response);	   
		$('#show_cli').html(info.data);
		}else{ 
		$('#show_cli').html('');}
		},
		error: function(error){}
		});
		}

// elimina_produ_detalle_out
	function del_prod_detail_out(correlativo){
		var action = 'delForDetalle_out';
		var id_detalle = correlativo;
		$.ajax({
		type    : "POST",
		url     : 'js/ajax.php',
		async   : true,
		data    : {action:action,id_detalle:id_detalle},    
		success: function(response){
		if(response !='error')
		{
		var info = JSON.parse(response);	   
		$('#detal_out').html(info.detalle);
		}else{ 
		$('#detal_out').html('');}
		},
		error: function(error){}
		});
		}
// elimina_produ_detalle_in
	function del_prod_detail_in(correlativo){
		var action = 'delForDetalle_in';
		var id_detalle = correlativo;
		$.ajax({
		type    : "POST",
		url     : 'js/ajax.php',
		async   : true,
		data    : {action:action,id_detalle:id_detalle},    
		success: function(response){
		if(response !='error')
		{
		var info = JSON.parse(response);	   
		$('#detal_in').html(info.detalle);
		}else{ 
		$('#detal_in').html('');}
		},
		error: function(error){}
		});
		}
// show_dot
	function detail_ot_s(id){
		var action = 'detailForOt';
		var id = id;
		    $.ajax({
		    type    : "POST",
		    url     : 'js/ajax.php',
		    async   : true,
		    data    : {action:action,id:id},    
		success: function(response){
		if(response !='error')
		{
		var info = JSON.parse(response);	   
		$('#tbody_modal_show_dot').html(info.data);
		}else{ 
		$('#tbody_modal_show_dot').html('');}},error: function(error){}});}

// close modal
	function closeModal(){
	$('.modal').fadeOut();
	}
