$(document).ready(function(){
//var crud
    const ID='#id';
    const NAME='#name';
    const CONT='#contac';
    const PATE='#patente';
    const COD='taskid';
    const HT='#detalle';
    const SEAR='#search';

//var doc
    const BPRO='#m-btn-add';
    const FSCH='#f-find';
    const FORM='#f-rec';

    myCRUD.crud_prod_type(HT,'r',0,'');
//update q item detalle
    $(document).on('click','.m-btn-up',function(){
        let element = $(this)[0].parentElement.childElement;
        let AA      = $(element).attr(COD);
        myCRUD.crud_prod_type(HT,'u',AA,ID,NAME);
        myCRUD.crud_prod_type(HT,'r','','','');
    })
//elimina item detaslle
    $(document).on('click','.delete',function(){
        let element = $(this)[0].parentElement.parentElement;
        let co      = $(element).attr(COD);
        myCRUD.crud_prod_type(HT,'d',co,'');
        myCRUD.crud_prod_type(HT,'r',0,'');
    })
//add_prod_type
	$(BPRO).click(function(e){
        e.preventDefault();
        myCRUD.crud_prod_type(HT,'c',ID,NAME);
        myCRUD.crud_prod_type(HT,'r',0,'');
    });
//search
    //$(FSCH).submit(function(e){
    //    e.preventDefault();
    //    myCRUD.crud_prod_type(HT,'s',$(SEAR).val(),'','');
    //})
});
