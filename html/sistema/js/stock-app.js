$(document).ready(function(){
  const TY  = 4;
  const HT  = "#detalle";
  const PD  = "#id";
  const SCL ='#cli';
  const Q   = "#q";
  const CD  ="taskId";
  const TYP ="tasktype"
  const XYZ= "#xyz";
  const XYZ2= "#xyz2";
  const BXYZ1 = "#b-xyz1";
  const BXYZ2 = "#b-xyz2";
  const BADD  = "#m-btn-add";
  const BORD  = "#b-order";
  const SEAR  = '#search';
//var doc
  const XSCH  = '#xyz-find';
  const IDSCH  = '#id-find';
  //myCRUD.crud_stock(HT,'r',0,'','',0);
  // select xyz2
  //myCRUD.crud_xyz(XYZ2,'rxyz','');
  //elimina item detaslle
  $(document).on('click','.delete',function(){
    let element = $(this)[0].parentElement.parentElement;
    let id      = $(element).attr(CD);
    myCRUD.crud_tmp_d_ot(HT,'d',id,'',0,'',TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,'',0,'',TY);
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
    myCRUD.crud_stock(PD,'rxyzid',0,'',XYZ1,0);
  })
  // add_prod
  $(BADD).click(function(e) {
    e.preventDefault();
    let a =-($(Q).val());
    let b =($(Q).val());
    console.log(a);
    myCRUD.crud_tmp_d_ot(HT,'cmxyz',0,PD,a,XYZ1,TY);
    myCRUD.crud_tmp_d_ot(HT,'cmxyz',0,PD,b,XYZ2,TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,'',0,'',TY);
  })
// proce_orden_out
  $(BORD).click(function(e){
    e.preventDefault();
    myCRUD.proc_ot(SCL,TY);
    myCRUD.crud_tmp_d_ot(HT,'r',0,'',0,'',TY);
  })
//search
    $(XSCH).submit(function(e){
        e.preventDefault();
        myCRUD.crud_stock(HT,'sx','','',$(XYZ).val(),1);
    })
    $(IDSCH).submit(function(e){
        e.preventDefault();
        myCRUD.crud_stock(HT,'sp',$(PD).val(),'','',1);
    })
    $(Q).change(function(e){
        e.preventDefault();
        myCRUD.crud_stock(HT,'sq','','','',$(Q).val());
    })
});

