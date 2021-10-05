$(document).ready(function(){
  const TY = 2;
  const PD='#id';
  const XYZ='#xyz';
  const SCL='#cli';
  const Q='#q';
  const CD='taskId';
  const HT='#detalle';
  const BAD='#m-btn-add';
  const BORD='#btn-order';
  const BXYZ='#btn-xyz';
// var doc
  const FPRO='#f-prod'; 
  const FCLI='#f-prov';
  const FXYZ='#f-xyz';
  myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  //select  
  myCRUD.crud_cli(SCL,'rc',1,'','','','');
  //elimina item detaslle
  $(document).on('click','.delete',function(){
    let element = $(this)[0].parentElement.parentElement;
    let id      = $(element).attr(CD);
    myCRUD.crud_tmp_d_ot(HT,'d',id,0,0,'',TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  })
  // busca_xyz_valida 
  $(BXYZ).click(function(e){
    e.preventDefault();
    $(XYZ).empty();
    myCRUD.crud_stock(XYZ,'ridxyz',$(PD).val(),'','',1);
  });
  // add_prod
  $(BAD).click(function(e){
    e.preventDefault();    
    myCRUD.crud_tmp_d_ot(HT,'c',0,$(PD).val(),$(Q).val(),$(XYZ).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  });
  // proce_orden_out
  $(BORD).click(function(e){
    e.preventDefault();
    myCRUD.proc_order($(SCL).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,'',0,'',TY);
  });
});
