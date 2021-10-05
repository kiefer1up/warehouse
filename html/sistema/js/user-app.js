$(document).ready(function(){
//var crud
    const ID='#id';
    const NAME='#name';
    const PAS='#pas';
    const CONT='#contac';
    const ROL='#rol';
    const COD='taskid';
    const HT='#detalle';
    const SEAR='#search';
//var doc
    const BPRO='#m-btn-add';
    const FSCH='#f-find';
    const FORM='#f-rec';

    myCRUD.crud_user(HT,'r','','','','','','');
//update q item detalle
    $(document).on('click','.m-btn-up',function(){
        let element = $(this)[0].parentElement.childElement;
        let AA      = $(element).attr(COD);
        myCRUD.crud_user(HT,'u',AA,ID,NAME,PAS,ROL,CONT);
        myCRUD.crud_user(HT,'r','','','','','','');
    })
//elimina item detaslle
    $(document).on('click','.delete',function(){
        let element = $(this)[0].parentElement.parentElement;
        let co      = $(element).attr(COD);
        myCRUD.crud_user(HT,'d',co,'','','','','');
        myCRUD.crud_user(HT,'r','','','','','','');
    })
//add_user
	$(BPRO).click(function(e){
        e.preventDefault();
        myCRUD.crud_user(HT,'c','',ID,NAME,PAS,ROL,CONT);
        myCRUD.crud_user(HT,'r','','','','','','');
    });
//search
    $(FSCH).submit(function(e){
        e.preventDefault();
        myCRUD.crud_user(HT,'s',$(SEAR).val(),'','','','','');
        
    })
});
