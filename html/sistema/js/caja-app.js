$(document).ready(function(){
//var crud
    const ID='#id';
    const Q='#q';
    const CONT='#contac';
    const PATE='#patente';
    const COD='taskid';
    const HT='#detalle';
    const SEAR='#search';
//var doc
    const BPRO='#m-btn-add';
    const BP='#btn-proc';
    const FCAJ='#f-caja';
    const FSCH='#f-find';
    const FORM='#f-rec';
    myCRUD.crud_caja(HT,'r',0,'',0);
//update q item detalle
    $(document).on('click','.m-btn-up',function(){
        let element = $(this)[0].parentElement.childElement;
        let AA      = $(element).attr(COD);
        myCRUD.crud_cli(HT,'u',AA,ID,NAME,CONT,PATE);
        myCRUD.crud_cli(HT,'r','','','','','');
    })
//elimina item detaslle
    $(document).on('click','.delete',function(){
        let element = $(this)[0].parentElement.parentElement;
        let co      = $(element).attr(COD);
        myCRUD.crud_caja(HT,'d',co,'',0);
        myCRUD.crud_caja(HT,'r',0,'',0);
    })
//add_user
	$(FCAJ).submit(function(e){
        e.preventDefault();
        myCRUD.crud_caja(HT,'c',0,ID,Q);
        myCRUD.crud_caja(HT,'r',0,'',0);
    })
//search
    $(FSCH).submit(function(e){
        e.preventDefault();
        myCRUD.crud_cli(HT,'s',$(SEAR).val(),'','','','');        
    })
//proc
    $(BP).click(function(e){
        e.preventDefault();
        myCRUD.proc_caja('p',1,1);
    })
});
