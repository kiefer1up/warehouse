$(document).ready(function(){
//var crud
  const BO="#boleta";
  const DT="#dt";
  const COD='taskid';
  //const EYE=".myBtnEye";
  myCRUD.crud_order(BO,'r',0);
	
  $(document).on('click','.myBtnEye',function(){
    let element = $(this)[0].parentElement.parentElement;
    let co      = $(element).attr(COD);
    $(DT).html('');
    alert('aoeuoe');
    myCRUD.crud_order(DT,'rdt',co);
    })
//  $(document).on('click','#openDialog',function(){ 
//    $("#dialog-modal").dialog();
  //  $("#dialog-modal").show();
  //})
});
