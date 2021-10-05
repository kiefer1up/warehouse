<?php

if(!empty($_POST)){
	include ('../../conexion.php');
	session_start();
//buscar cliente
	if ($_POST['action'] == 'searchCli_out' or $_POST['action'] == 'searchCli_in'){
		if (!empty($_POST['cliente'])){$rut = $_POST['cliente'];
            	$query=mysqli_query($conexion,"CALL s_cli_id ('$rut')");}
		if (!empty($_POST['proveedor'])){$rut= $_POST['proveedor'];
            	$query=mysqli_query($conexion,"CALL s_sale_id ('$rut')");}
              	//mysqli_close($conexion);
              	$result=mysqli_num_rows($query);
              	if ($result > 0) {
                $data=mysqli_fetch_assoc($query);
                echo json_encode($data,JSON_UNESCAPED_UNICODE);
              	}else {
                echo "noData";
              	}
              	exit;
		}
//registra cliente en despacho
	if ($_POST['action'] == 'add_cli'){
		$rut=$_POST['cli_rut'];
		$name=$_POST['cli_name'];
		$pat=$_POST['patente'];
		$cont=$_POST['cli_contact'];
		$query=mysqli_query($conexion,"CALL r_client('$rut','$name','$cont','$pat');");
		$result=mysqli_num_rows($query);
		if ($result > 0) {
		$cod_cli= mysqli_insert_id($conexion);
		$msg=$cod_cli;}else{$msg= 'error';}
		mysqli_close($conexion);
		echo $msg;
		// print_r($_POST);
		exit;}
//buscar producto en despacho out or in
	if ($_POST['action'] == 'searchprod_add_out' or $_POST['action'] == 'searchprod_add_in'  ){
           $prod_id=$_POST['producto'];
           $query=mysqli_query($conexion,"CALL s_stock_prod('$prod_id')");
            mysqli_close($conexion);
           $result=mysqli_num_rows($query);
           if ($result > 0) {
              $data=mysqli_fetch_assoc($query);
              echo json_encode($data,JSON_UNESCAPED_UNICODE);
              exit;}
              echo "error";
              exit;}
//buscar stock
	if ($_POST['action'] == 'searchprodz_add_out' or $_POST['action'] == 'searchprodz_add_in' ){
		$prod_id=$_POST['ubicacion'];
		$query=mysqli_query($conexion,"CALL s_stock_q_xyz('$prod_id')");
		mysqli_close($conexion);
		$result=mysqli_num_rows($query);
		if ($result > 0) {
		$json = array();
		while($row=mysqli_fetch_array($query)){
                $Cantidad = $row["stock_q"];
                $Ubicacion = $row["stock_xyz_xyz"];
                $json[] = array("stock_q" => $Cantidad, "stock_xyz_xyz" => $Ubicacion);
                }
		echo json_encode($json);
		}else {
		echo json_encode("error");
		exit;
		}
		exit;
		}
//agrega a detalle fac
	if ($_POST['action'] == 'add_prod_out_fac' or $_POST['action'] == 'add_prod_in_fac' ){
          if ((empty($_POST['id'])) || (empty($_POST['q']))) {
            echo "error campos obligatorios";
	  }else {
	if ($_POST['action'] == 'add_prod_out_fac'){$orderType=1;}else{$orderType=0;}
	$prod_id=$_POST['id'];
        $q=$_POST['q'];
	$ubi=$_POST['xyz'];
	$token=$_SESSION['user_id'];
	$query=mysqli_query($conexion,"CALL add_detail_temp('$prod_id','$ubi','$q','$token',$orderType)");
	$result=mysqli_num_rows($query);
	$detalle_tabla='';
	$arrayData= array();
	if($result>0){
	while($data= mysqli_fetch_assoc($query)){
		if($orderType==1){$detalle_tabla .='<tr><td>'.$data["prod_id"].'</td><td>'.$data["prod_name"].'</td><td>'.$data["prod_q"].'</td><td>'.$data["prod_xyz"].'</td><td><a class="action_errase" href="#" onclick="event.preventDefault(); del_prod_detail_out('.$data["correlativo"].');">borrar</a></td></tr>';
		}else{$detalle_tabla .='<tr><td>'.$data["prod_id"].'</td><td>'.$data["prod_name"].'</td><td>'.$data["prod_q"].'</td><td>'.$data["prod_xyz"].'</td><td><a class="action_errase" href="#" onclick="event.preventDefault(); del_prod_detail_in('.$data["correlativo"].');">borrar</a></td></tr>';}
	}
	$arrayData['data']=$detalle_tabla;
        echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);
     
	      }else{echo 'error';}}mysqli_close($conexion);exit;}
//start_actualiza detalle
	if ($_POST['action'] == 'searchForDetalle' ){
        	if (empty($_POST['user'])) {
            	echo "error user";
          	}else {
		$token=$_SESSION['user_id'];
		$orderType=$_POST['orderType'];
        	//$token=md5($_SESSION['PASSWORD']);
        	$query=mysqli_query($conexion,"CALL show_detail_ot($token,$orderType)");
        	$result=mysqli_num_rows($query);
        	$detalle_tabla='';
        	$arrayData= array();
         
		if($result>0){	
		while($data= mysqli_fetch_assoc($query)){
			if($orderType==1){$detalle_tabla .='<tr><td>'.$data["prod_id"].'</td><td>'.$data["prod_name"].'</td><td>'.$data["prod_q"].'</td><td>'.$data["prod_xyz"].'</td><td><a class="action_errase" href="#" onclick="event.preventDefault(); del_prod_detail_out('.$data["correlativo"].');">borrar</a></td></tr>';
		}else{$detalle_tabla .='<tr><td>'.$data["prod_id"].'</td><td>'.$data["prod_name"].'</td><td>'.$data["prod_q"].'</td><td>'.$data["prod_xyz"].'</td><td><a class="action_errase" href="#" onclick="event.preventDefault(); del_prod_detail_in('.$data["correlativo"].');">borrar</a></td></tr>';}
		}   
		$arrayData['detalle']=$detalle_tabla;
        	echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);
	     	}else{
              	echo 'error';}
	  	}
	  	mysqli_close($conexion);
            	exit;
      		}
//del prod detalle
	if ($_POST['action'] == 'delForDetalle_out' or $_POST['action'] == 'delForDetalle_in' ){
		if (empty($_POST['id_detalle'])) {
		echo "error";
		}else {
		if ($_POST['action'] == 'delForDetalle_out'){$orderType=1;}else{$orderType=0;}	
		$id= $_POST['id_detalle'];
		$token= $_SESSION['user_id'];
		$query=mysqli_query($conexion,"CALL del_detail_temp($id,'$token',$orderType)");
		$result=mysqli_num_rows($query);
		$detalle_tabla='';
		$arrayData= array();    
		if($result>0){
		while($data= mysqli_fetch_assoc($query)){
			if($orderType==1){$detalle_tabla .='<tr><td>'.$data["prod_id"].'</td><td>'.$data["prod_name"].'</td><td>'.$data["prod_q"].'</td><td>'.$data["prod_xyz"].'</td><td><a class="action_errase" href="#" onclick="event.preventDefault(); del_prod_detail_out('.$data["correlativo"].');">borrar</a></td></tr>';
		}else{$detalle_tabla .='<tr><td>'.$data["prod_id"].'</td><td>'.$data["prod_name"].'</td><td>'.$data["prod_q"].'</td><td>'.$data["prod_xyz"].'</td><td><a class="action_errase" href="#" onclick="event.preventDefault(); del_prod_detail_in('.$data["correlativo"].');">borrar</a></td></tr>';}
		}
		$arrayData['detalle']=$detalle_tabla;
		echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);
		}else{
		echo 'error';}
		}
		mysqli_close($conexion);
		exit;}
//proc_order_ambas
	if ($_POST['action'] == 'proc_order_out' or $_POST['action'] == 'proc_order_in'){	
		if (empty($_POST['cli_id'])){$cod_cli = 1;}else{$cod_cli = $_POST['cli_id'];}	
		$token= $_SESSION['user_id'];
        $user= $_SESSION['user_id'];
        $order_type= $_POST['type_order'];
		$query_pass=mysqli_query($conexion,"SELECT * FROM d_ot_temporal WHERE user_token = '$token' AND order_type =$order_type");
		$result=mysqli_num_rows($query_pass);
		if($result>0){
			if ($_POST['action'] == 'proc_order_out'){
				$query_proc=mysqli_query($conexion,"CALL proc_order_out('$user','$cod_cli',$order_type,'$token')");}
			else{	$query_proc=mysqli_query($conexion,"CALL proc_order_in('$user','$cod_cli',$order_type,'$token')");}
		$result_proc = mysqli_num_rows($query_proc);
		if($result_proc > 0){
			$data = mysqli_fetch_assoc($query_proc);
			echo json_encode($data,JSON_UNESCAPED_UNICODE);
			}else{echo "error";}
		mysqli_close($conexion);
		exit;
		}}
//s_prod
	if ($_POST['action']== 'searchprod'){
		if($_POST['producto']==""){echo 'error';}else{
		$name= $_POST['producto'];
		$query= mysqli_query($conexion,"SELECT * FROM prod WHERE prod_name LIKE '%$name%' or prod_id = '$name';");
		$result= mysqli_num_rows($query);
		$detalle_tabla='';
		$arrayData= array();
		if ($result > 0) {
		while ($data=mysqli_fetch_assoc($query)){
			$detalle_tabla .='<tr><td>'.$data["prod_id"].'</td><td>'.$data["prod_name"].'</td></tr>';}
		$arrayData['data']=$detalle_tabla;
		echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);
		}else{
		echo 'error';
		}
		mysqli_close($conexion);}
        exit;}
//s_ot
	if ($_POST['action']== 'searchot'){
		if($_POST['ot']==""){echo 'error';}else{
		$name= $_POST['ot'];
        $query= mysqli_query($conexion,"SELECT o.ot_id, o.cli_id, o.order_date, t.oder_name, o.user_id, c.cli_name ,c.contacto, c.patente 
            FROM ((order_ot o 
                INNER JOIN cli c        ON o.cli_id     = c.cli_rut) 
                INNER JOIN order_type t ON o.order_type = t.order_type_id)
            WHERE   o.ot_id         LIKE '%$name%' or 
                    o.cli_id        LIKE '%$name%' or 
                    o.order_date    LIKE '%$name%' or 
                    t.oder_name     LIKE '%$name%' or 
                    o.user_id       LIKE '%$name%' or 
                    c.cli_name      LIKE '%$name%' or 
                    c.contacto      LIKE '%$name%' or 
                    c.patente       LIKE '%$name%';");
		$result= mysqli_num_rows($query);
		$detalle_tabla='';
		$arrayData= array();
		if ($result > 0) {
		while ($data=mysqli_fetch_assoc($query)){
			$detalle_tabla .='<tr><td>'.$data["ot_id"].'</td><td>'.$data["order_date"]. '</td><td>'.$data["oder_name"]. '</td><td>'.$data["user_id"].'</td><td>'.$data["cli_name"].'</td><td>'.$data["patente"].'</td></tr>';}
		$arrayData['data']=$detalle_tabla;
		echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);
		}else{
		echo 'error';
		}
		mysqli_close($conexion);}
        exit;}
//s_prod_q
	if ($_POST['action']== 'searchProdQ'){
		if($_POST['id']==""){echo 'error';}else{
		$name= $_POST['id'];
        $query= mysqli_query($conexion,"SELECT s.stock_prod_id, s.stock_q, s.stock_xyz_xyz, p.prod_name
            FROM stock s INNER JOIN prod p        ON s.stock_prod_id=p.prod_id  WHERE
                    s.stock_prod_id LIKE '%$name%' or 
                    s.stock_q       LIKE '%$name%' or 
                    s.stock_xyz_xyz LIKE '%$name%' or 
                    p.prod_name     LIKE '%$name%';");
		$result= mysqli_num_rows($query);
		$detalle_tabla='';
		$arrayData= array();
		if ($result > 0) {
		while ($data=mysqli_fetch_assoc($query)){
	    $detalle_tabla .='<tr><td>'.$data["stock_prod_id"].'</td><td>'. $data["prod_name"].'</td><td>'.$data["stock_xyz_xyz"]. '</td><td>'.$data["stock_q"].'</td></tr>';}
		$arrayData['data']=$detalle_tabla;
		echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);
		}else{
		echo 'error';
		}
		mysqli_close($conexion);}
        exit;}
//s_prod_xyz
	if ($_POST['action']== 'searchProdXYZ'){
		if($_POST['id']==""){echo 'error';}else{
		$name= $_POST['id'];
        $query= mysqli_query($conexion,"SELECT s.stock_prod_id, s.stock_q, s.stock_xyz_xyz, p.prod_name FROM stock s INNER JOIN prod p ON s.stock_prod_id=p.prod_id  WHERE s.stock_xyz_xyz = '$name';");
		$result= mysqli_num_rows($query);
        $detalle_tabla='';
        $arrayData= array();
		if ($result > 0) {
		while ($data=mysqli_fetch_assoc($query)){
        $detalle_tabla .='<tr><td>'.$data["stock_prod_id"].'</td><td>'. $data["prod_name"].'</td><td>'.$data["stock_q"].'</td><td><input type="text" id ="mv_q"></td><td><a class="btn_green" href="#" onclick="event.preventDefault(); acc_prod_stock('.$data["stock_prod_id"].','.$data['stock_xyz_xyz'].',2);">Actualizar</a></td></tr>';}
		$arrayData['data']=$detalle_tabla;
		echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);}else{echo 'error';}mysqli_close($conexion);}
        exit;}
//acc_prod_xyz_stock
	if ($_POST['action']== 'accProdXYZ'){
		if($_POST['id']==""){echo 'error';}else{
        $id= $_POST['id'];
        $q= $_POST['q'];
        $xyz= $_POST['xyz'];
        $query= mysqli_query($conexion,"UPDATE stock SET stock_q= $q WHERE stock_prod_id = '$id' AND stock_xyz_xyz = '$xyz';");
		$result= mysqli_num_rows($query);
		if ($result > 0) {
            echo 'Producto actualizado';}else{echo 'error';}mysqli_close($conexion);}
        exit;}
//start_show_user
	if ($_POST['action'] == 'searchForUser' ){	
		//$token=$_SESSION['user_id'];
        	$query=mysqli_query($conexion,"CALL s_user");
        	$result=mysqli_num_rows($query);
        	$detalle_tabla='';
        	$arrayData= array();
         
		if($result>0){	
			while($data= mysqli_fetch_assoc($query)){
			$detalle_tabla .='<tr><td>'.$data["user_id"].'</td><td>'.$data["NOMBRE"].'</td><td>'.$data["rol"].'</td><td><a class="action_edit" href="#" onclick="event.preventDefault(); user_edit('.$data["user_id"].');">editar</a><a class="action_errase" href="#" onclick="event.preventDefault(); user_errase('.$data["user_id"].');">borrar</a></td></tr>';
		}   
		$arrayData['data']=$detalle_tabla;
        	echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);
	     	}else{
              	echo 'error';}
	  	mysqli_close($conexion);
            	exit;
      		}
//delete_user
	if ($_POST['action'] == 'dielForUser' ){	
		$id=$_POST['id'];
        	$query=mysqli_query($conexion,"CALL d_user('$id')");
        	$result=mysqli_num_rows($query);
        	$detalle_tabla='';
        	$arrayData= array();
         
		if($result>0){	
			while($data= mysqli_fetch_assoc($query)){
			$detalle_tabla .='<tr><td>'.$data["user_id"].'</td><td>'.$data["NOMBRE"].'</td><td>'.$data["rol"].'</td><td><a class="action_edit" href="#" onclick="event.preventDefault(); user_edit('.$data["user_id"].');">editar</a><a class="action_errase" href="#" onclick="event.preventDefault(); user_errase('.$data["user_id"].');">borrar</a></td></tr>';
		}   
		$arrayData['data']=$detalle_tabla;
        	echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);
	     	}else{
              	echo 'error';}
	  	mysqli_close($conexion);
            	exit;
      		}
//start_show_client
	if ($_POST['action'] == 'searchForCli' ){	
		//$token=$_SESSION['user_id'];
        	$query=mysqli_query($conexion,"CALL s_cli");
        	$result=mysqli_num_rows($query);
        	$detalle_tabla='';
        	$arrayData= array(); 
		if($result>0){	
			while($data= mysqli_fetch_assoc($query)){
		   
			$detalle_tabla .='<tr><td>'.$data["cli_rut"].'</td><td>'.$data["cli_name"].'</td><td>'.$data["patente"].'</td><td><a class="action_edit" href="#" onclick="event.preventDefault(); cli_edit('.$data["cli_rut"].');">editar</a><a class="action_errase" href="#" onclick="event.preventDefault(); cli_errase('.$data["cli_rut"].');">borrar</a></td></tr>';
		}
		$arrayData['data']=$detalle_tabla;
        	echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);
	     	}else{
              	echo 'error';}
	  	mysqli_close($conexion);
            	exit;
      		}
//start_show_ot
	if ($_POST['action'] == 'searchstartForot' ){	
		//$token=$_SESSION['user_id'];
        	$query=mysqli_query($conexion,"CALL s_ot_start");
        	$result=mysqli_num_rows($query);
        	$detalle_tabla='';
        	$arrayData= array(); 
		if($result>0){	
			while($data= mysqli_fetch_assoc($query)){
			$detalle_tabla .='<tr><td>'.$data["ot_id"].'</td><td>'.$data["order_date"]. '</td><td>'.$data["oder_name"]. '</td><td>'.$data["user_id"].'</td><td>'.$data["cli_name"].'</td><td>'.$data["patente"].'</td><td><a class="action_edit link_add show_dot" href="#" onclick="event.preventDefault(); detail_ot_s('.$data["ot_id"].');">detalle</a></td></tr>';}
		$arrayData['data']=$detalle_tabla;
        	echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);
	     	}else{
              	echo 'error';}
	  	mysqli_close($conexion);exit;}
//detair_show_ot
	if ($_POST['action'] == 'detailForOt' ){	
		    $id=$_POST['id'];
        	$query=mysqli_query($conexion,"CALL s_ot_dt('$id')");
        	$result=mysqli_num_rows($query);
        	$detalle_tabla='';
        	$arrayData= array(); 
		if($result>0){	
			while($data= mysqli_fetch_assoc($query)){
			$detalle_tabla .='<tr><td>'.$data["ot_id"].'</td><td>'.$data["prod_id"].'</td><td>'.$data["prod_xyz"]. '</td><td>'.$data["prod_q"].'</td></tr>';}
		$arrayData['data']=$detalle_tabla;
        	echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);
	     	}else{echo 'error';}mysqli_close($conexion);exit;}
//delete_cli
	if ($_POST['action'] == 'delForCli' ){	
		$id=$_POST['id'];
        	$query=mysqli_query($conexion,"CALL d_cli('$id')");
        	$result=mysqli_num_rows($query);
        	$detalle_tabla='';
        	$arrayData= array();
		if($result>0){	
			while($data= mysqli_fetch_assoc($query)){
			$detalle_tabla .='<tr><td>'.$data["cli_rut"].'</td><td>'.$data["cli_name"].'</td><td>'.$data["patente"].'</td><td><a class="action_edit" href="#" onclick="event.preventDefault(); cli_edit('.$data["cli_rut"].');">editar</a><a class="action_errase" href="#" onclick="event.preventDefault(); cli_errase('.$data["cli_rut"].');">borrar</a></td></tr>';}   
		$arrayData['data']=$detalle_tabla;
        	echo json_encode($arrayData,JSON_UNESCAPED_UNICODE);
	     	}else{
              	echo 'error';}
	  	mysqli_close($conexion);
            	exit;
      		}

}
exit;

?>
