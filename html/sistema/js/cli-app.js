$(document).ready(function(){
//var crud
    const ID='#id';
    const RUT='#rut';
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

    myCRUD.crud_cli(HT,'r',0,'','','','');
//update q item detalle
	$('#m-btn-up').click(function(e){
        e.preventDefault(); var 
        demo = document.getElementById("id").innerHTML;
        myCRUD.crud_cli(HT,'u',demo,$(RUT).val(),$(NAME).val(),$(CONT).val(),$(PATE).val());
        myCRUD.crud_cli(HT,'r',0,'','','','');
//update q item detalle
    });
//elimina item detaslle
    $(document).on('click','.delete',function(){
        let element = $(this)[0].parentElement.parentElement;
        let co      = $(element).attr(COD);
        myCRUD.crud_cli(HT,'d',co,'','','','');
        myCRUD.crud_cli(HT,'r',0,'','','','');
    })
//add_user
	$(BPRO).click(function(e){
        e.preventDefault();
        myCRUD.crud_cli(HT,'c',0,$(RUT).val(),$(NAME).val(),$(CONT).val(),$(PATE).val());
        myCRUD.crud_cli(HT,'r',0,'','','','');
    });
//search
    $(FSCH).submit(function(e){
        e.preventDefault();
        myCRUD.crud_cli(HT,'s',$(SEAR).val(),'','','','');
        
    })
});
