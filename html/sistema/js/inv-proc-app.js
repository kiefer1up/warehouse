$(document).ready(function(){
//var
  const TY    = 3;
  const XYZ   = "#xyz";
  const ID    = '#mid';
  const PD    = '#mpd';
  const NAME  = "#mnm";
  const CP    = "#mcp";
  const MXYZ   = "#mxyz";
  const Q     = "#mq";
  const COD   = 'taskId';
  const HT    = '#detalle';
  const SCL   = "#tk"
//form
  const FREC  = "#f-rec";
  const FXYZ  = "#f-xyz";
  const FID   = "#f-id";
  const FPRO  = "#f-prod";
  const FUPQ  = "#f-up-q";
//botones
  const BTOG  = "#b-tog-q";
  const BPD   = "#b-pd";
  const BORD  = "#b-order";
  const BEMP  = "#b-emp-xyz";
  const MAD   = "#m-btn-add";
//acciones
  myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  myCRUD.crud_stock(XYZ,'rxyz','','','',1);
//elimina item detaslle
  $(document).on('click','.delete',function(){
    let element = $(this)[0].parentElement.parentElement;
    let id      = $(element).attr(COD);
    myCRUD.crud_tmp_d_ot(HT,'d',id,0,0,'',TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  })
//hide
  //muestra input cod
  $('#myBtn').click(function(e){
    document.getElementById("mpd").style.display = "block";
  });
  //esconde pd para update
    $(document).on('click','.myBtnUp',function(){
    document.getElementById("mpd").style.display = "none";
  })
//update q inv
  $('#m-btn-up').click(function(e){
    e.preventDefault();
    demo = document.getElementById("mid").innerHTML;
    myCRUD.crud_tmp_d_ot(HT,'u',demo,$(PD).val(),$(Q).val(),$(MXYZ).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  });
//add xyz
  $(FXYZ).submit(function(e){
    e.preventDefault();
    myCRUD.crud_tmp_d_ot(HT,'cxyz',0,0,0,$(XYZ).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  });
//emp xyz
  $(BEMP).click(function(e){
    e.preventDefault();
    myCRUD.crud_tmp_d_ot(HT,'dxyz',0,0,0,$(XYZ).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  });
//s prod id
  $(BPD).click(function(e){ 
    e.preventDefault();
    myCRUD.crud_tmp_d_ot(HT,'c',0,$(PD).val(),$(Q).val(),$(XYZ).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  });
// add_prod_in detalle 
  $(FREC).submit(function(e){
    e.preventDefault();    
    myCRUD.crud_tmp_d_ot(HT,'c',0,$(PD).val(),$(Q).val(),$(XYZ).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  });
// proce_orden_out
  $(BORD).click(async function(e){
    e.preventDefault();
    myCRUD.proc_order($(SCL).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  });
})
