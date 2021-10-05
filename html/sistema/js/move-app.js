$(document).ready(function(){
//var
  const TY    = 4;
  const PD    = '#id';
  const XYZ   = "#xyz";
  const XYZ1  = "#xyz1";
  const XYZ2  = "#xyz2";
  const Q     = "#q";
  const COD   = 'taskId';
  const HT    = '#detalle';
  const SCL   = '#tk';
//form
  const FXYZ  = "#f-xyz";
  const FID   = "#f-id";
  const FPRO  = "#f-prod";
  const FUPQ  = "#f-up-q";
//botones
  const BXYZ1  = "#b-xyz1";
  const BTOG  = "#b-tog-q";
  const BPD   = "#b-pd";
  const BORD  = "#b-order";
  const BEMP  = "#b-emp-xyz";
  const MAD   = "#m-btn-add";
//acciones
  myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
  myCRUD.crud_stock(XYZ1,'rxyz',0,'','',0);
  myCRUD.crud_xyz(XYZ2,'rxyz',0,'');
  //elimina item detaslle
    $(document).on('click','.delete',function(){
    let element = $(this)[0].parentElement.parentElement;
    let id      = $(element).attr(COD);
    myCRUD.crud_tmp_d_ot(HT,'d',id,0,0,'',TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
    })
  //update    
    $(document).on('click','.update',async function(){
    let element = $(this)[0].parentElement.parentElement;
    let id      = $(element).attr(TYP);
    await myLibrary.p_proc_move_Dt(1,id);
    myLibrary.list_dt_tm_move(OT0,OT1);
    })
  // busca_xyz_valida 
    $(BXYZ1).click(function(e){
    e.preventDefault();
    myCRUD.crud_stock(PD,'rxyzid',0,'',$(XYZ1).val(),0);
    });
  // add_prod
    $(MAD).click(function(e) {
    e.preventDefault();
    let a =-($(Q).val());
    let b =($(Q).val());
    myCRUD.crud_tmp_d_ot(HT,'c',0,$(PD).val(),a,$(XYZ1).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'c',0,$(PD).val(),b,$(XYZ2).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
    });
  // proce_orden_out
    $(BORD).click(function(e){
    e.preventDefault();
    myCRUD.proc_order($(SCL).val(),TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,0,0,'',TY);
    });
});
