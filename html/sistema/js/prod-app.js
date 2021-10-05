$(document).ready(function(){
//var crud
    const ID='#id';
    const NAME='#name';
    const TYPD='#tprod';
    const COD='taskid';
    const HT='#detalle';
    const SEAR='#search';
//var doc
    const BPRO='#m-btn-add';
    const FSCH='#f-find';
    const FORM='#f-rec';

    myCRUD.crud_prod(HT,'r',1,'','',1);
//update q item detalle
    $(document).on('click','.m-btn-up',function(){
        let element = $(this)[0].parentElement.childElement;
        let AA      = $(element).attr(COD);
        myCRUD.crud_prod(HT,'u',AA,ID,NAME,TYPD);
        myCRUD.crud_prod(HT,'r','','','','');
    })
//elimina item detaslle
    $(document).on('click','.delete',function(){
        let element = $(this)[0].parentElement.parentElement;
        let co      = $(element).attr(COD);
        myCRUD.crud_prod(HT,'d',co,'','','');
        myCRUD.crud_prod(HT,'r','','','','');
    })
//add_user
	$(BPRO).click(function(e){
        e.preventDefault();
        myCRUD.crud_prod(HT,'c','',ID,NAME,TYPD);
        myCRUD.crud_prod(HT,'r','','','','');
    });
//search
  $(FSCH).submit(function(e){
    var num = $(SEAR).val();
    var str = num.toString();
    //console.log(num); // 24
    //console.log(str); // "24"
    e.preventDefault();
    myCRUD.crud_prod(HT,'s',$(SEAR).val(),str,'',1);    
    })
});
