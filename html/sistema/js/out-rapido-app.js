$(document).ready(function(){
    const OT    = 1;
    const ID    ='#id';
    const XYZ   ='#xyz';
    const PROV  ='#prov';
    const Q     ='#q';
    const COD   ='taskId';
    const FPRO  ='#f-prod';
    const FXYZ  ='#f-xyz';
    const HT    ='#detalle';
    const BPRO  ='#b-prod';
    const BORD  ='#b-order';
//elimina item detaslle
    $(document).on('click','.delete',function(){
        let element = $(this)[0].parentElement.parentElement;
        let id      = $(element).attr(COD);
        $.post('tool/rec-delete.php',{id} ,function(response){        
            myLibrary.list_dt_tm(OT);
        })
    })
// busca_xyz
    $(FXYZ).submit(function(e){
		e.preventDefault();
        myLibrary.list_stock_prod_xyz_select(XYZ,ID);
    });
// add_prod
    $(BPRO).click(async function(e) {
		e.preventDefault();    
        await myLibrary.p_addDt(ID,Q,XYZ,OT);
        myLibrary.list_dt_tm(OT); 
    });
// proce_orden_out
	$(BORD).click(async function(e){
		e.preventDefault();
        await myLibrary.p_procDt(PROV,OT);
        myLibrary.list_dt_tm(OT);
    });
});
