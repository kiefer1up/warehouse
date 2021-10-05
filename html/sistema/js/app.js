$(document).ready(function(){
//elimina item detaslle
    fetchTasks();
    $(document).on('click','.task-delete',function(){
        let element = $(this)[0].parentElement.parentElement;
        let id      = $(element).attr('taskId');
        $.post('tool/rec-delete.php',{id} ,function(response){
            fetchTasks();
        })
    })
//busca vendedor
    $('#sale_id').keyup(function(){
        if ($('#sale_id').val()){
        let id = $('#sale_id').val();
        $.ajax({
            url: 'tool/sale-list.php',type: 'POST',data: {id},
            success: function(response){
                let data   = JSON.parse(response);
                console.log(data);
                if (response!= "null") {
                $('#prov_sale_name').val(data.name_sale).attr('disabled','disabled');
	            $('#prov_factory_name').val(data.id_prov).attr('disabled','disabled');
	            $('#prov_sale_contact').val(data.contacto).attr('disabled','disabled');
		        $('#reg_ven').slideUp();
                }else{
		        $('#prov_sale_name').val('').removeAttr('disabled');
		        $('#prov_factory_name').val('').removeAttr('disabled');
		        $('#prov_sale_contact').val('').removeAttr('disabled');
		        $('#reg_ven').slideDown();
                }
                }   
        });}
    });

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
		$('#q_add_prod_in').removeAttr('disabled');}
		else{
		$('#name_add_prod_in').html('--');
		$('#stock_add_prod_in').html('--');
		$('#btn_add_prod_in').slideUp();
		$('#q_add_prod_in').removeAttr('disabled');
		}},error: function(error){}});}});
// busca prod ubi keyup in
	$('#id_add_prod_in').keyup(function(){
		var xyz = $(this).val();
		var action = 'searchprodz_add_in';
		$.ajax({
		url: 'js/ajax.php',
		type: 'post',
		data: {action,ubicacion:xyz},
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
// add_prod_in detalle
		$('#form-rec').submit(function(e){
            const postData={
                id : $('#id_add_prod_in').val(),
		        q : $('#q_add_prod_in').val(),
		        action : 'add_prod_in_fac',
		        xyz : $('#xyz_add_prod_in').val()
            };
            $.post('js/ajax.php', postData, function(response){
                console.log(response);
                fetchTasks();
                $('#form-rec').trigger('reset');
		        $('#name_add_prod_in').html('');
		        $('#stock_add_prod_in').html('');
		        $("#xyz_add_prod_in").empty();
            });
            e.preventDefault();
        });
//funciones
    function fetchTasks(){
        let orderType= 0;
        $.ajax({
            url: 'tool/rec-list.php',
            type: 'GET',
            data: {orderType},
            success: function(response){
                let tasks       = JSON.parse(response);
                let template    = '';
                tasks.forEach(data =>{
                template += `
                <tr taskId="${data.correlativo}" taskType="${data.oType}">
                    <td>${data.id}</td>    
                    <td>${data.name}</td>    
                    <td>${data.q}</td>    
                    <td>${data.xyz}</td>
                    <td><button class="task-delete btn btn-sm btn-outline-danger">Delete</button>    
                    <button class="task-edit btn btn-sm btn-outline-success">Edit</button></td>    
                    </tr>`            
                });
                $('#detal_in').html(template);
            }
        });
    }
});
