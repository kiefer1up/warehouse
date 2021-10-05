$(document).ready(function(){
//var crud
    const ID='#id';
    const NAME='#name';
    const FON='#fono';
    const EMA='#email';
    const COD='taskid';
    const HT='#detalle';
    const SEAR='#search';

//var doc
    const BPRO='#m-btn-add';
    const FSCH='#f-find';
    const FORM='#f-rec';

    myCRUD.crud_prov(HT,'r','','','','','');
//update q item detalle
    $(document).on('click','.m-btn-up',function(){
        let element = $(this)[0].parentElement.childElement;
        let AA      = $(element).attr(COD);
        myCRUD.crud_prov(HT,'u',AA,ID,NAME,'','');
        myCRUD.crud_prov(HT,'r','','','','','');
    })
//elimina item detaslle
    $(document).on('click','.delete',function(){
        let element = $(this)[0].parentElement.parentElement;
        let co      = $(element).attr(COD);
        myCRUD.crud_prov(HT,'d',co,'','','','');
        myCRUD.crud_prov(HT,'r','','','','','');
    })
//add_prod_type
	$(BPRO).click(function(e){
        e.preventDefault();
        myCRUD.crud_prov(HT,'c','',ID,NAME,FON,EMA);
        myCRUD.crud_prov(HT,'r','','','','','');
    });
//search
    $(FSCH).submit(function(e){
        e.preventDefault();
        myCRUD.crud_prov(HT,'s',$(SEAR).val(),'','','','');
    })
});
