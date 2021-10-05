$(document).ready(function(){
  const TY = 1;
  const PD='#id';
  const XYZ='#xyz';
  const SPRV='#prov';
  const Q='#q';
  const CD='taskId';
  const FREC='#f-rec';
  const FCLI='#f-prov';
  const FPRO='#f-prod';
  const FXYZ='#f-xyz';
  const HT='#detalle';
  const BAD='#m-btn-add';
  const BORD='#btn-order';
  myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  //select  
  myCRUD.crud_prov(SPRV,'rp',1,1,'','','');
  myCRUD.crud_xyz(XYZ,'rxyz',1,'');
  //elimina item detaslle
  $(document).on('click','.delete',function(){
    let element = $(this)[0].parentElement.parentElement;
    let id      = $(element).attr(CD);
    myCRUD.crud_tmp_d_ot(HT,'d',id,0,0,'',TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  })
  // add_prod
  $(FREC).submit(function(e){
    e.preventDefault();    
    myCRUD.crud_tmp_d_ot(HT,'c',0,$(PD).val(),$(Q).val(),$(XYZ).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  });
  // proce_orden_out
  $(BORD).click(function(e){
    e.preventDefault();
    myCRUD.proc_order($(SPRV).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  });
})
