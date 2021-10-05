//funciones
var myCRUD = {
//cliente
  crud_cli: function(HT,CRUD,COD,ID,NAME,EMAIL,FONO){
  //rs 
    if(CRUD==='r'|| CRUD==='s'){
      const data={
        crud:CRUD,cod:COD,id:ID,name:NAME,email:EMAIL,fono:FONO
      };
      $.post('tool/crud-cli.php',data,function(response){
        let tasks       = response;
        let template    = '';
        tasks.forEach(data =>{
          template += `<tr taskid="${data.id}"><td>${data.rut}</td><td>${data.name}</td><td>${data.emil}</td><td>${data.fon}</td><td class="txt-center"><button class="myBtnUp btn-update fa fa-pencil"></button><button class="delete btn-delete fa fa-trash"></button></td></tr>`
        });
        $(HT).html(template);
      },'json');
    }
  //select
    if(CRUD==='rc'){
      const data={
        crud:CRUD,cod:COD,id:ID,name:NAME,email:EMAIL,fono:FONO
      };
      $.post('tool/crud-cli.php',data,function(response){
        if (response != 'null'){
          let len = response.length;
          for( let i = 0; i<len; i++){
            let id = response[i]['id'];
            let cli = response[i]['name'];
            $(HT).append("<option value='"+id+"'>"+cli+"</option>");
          }
        }
        else{$(HT).html('<option>no_data</option>');}
      },'json');
    }
  //cdu
    if(CRUD==='c'||CRUD==='d'||CRUD==='u'){ 
      const data={
        crud:CRUD,cod:COD,id:ID,name:NAME,email:EMAIL,fono:FONO
      };
      $.post('tool/crud-cli.php',data,function(response){
        if(response!=''){window.alert(response)}
      });
    }
  },
//xyz
  crud_xyz: function(HT,CRUD,ID,XYZ){
  //select  
    if(CRUD==='rxyz'){
      const data={crud:CRUD,id:ID,xyz:XYZ};
      $.post('tool/crud-xyz.php',data,function(response){
        $(HT).prop('selectedIndex',0);
        if (response != 'null'){
          let len = response.length;
          for( let i = 0; i<len; i++){
            let id = response[i]['id'];
            let name = response[i]['name'];
            $(HT).append("<option value='"+name+"'>"+name+"</option>");
          }
        }
        else{$(HT).html('<option>no_data</option>');}
      },'json');
    }
  },
//producto
  crud_prod: function(HT,CRUD,COD,ID,NAME,TYPE){
    if(CRUD==='r'|| CRUD==='s'){
      const data={
        crud:CRUD,cod:COD,id:ID,name:NAME,ty:TYPE};
      $.post('tool/crud-prod.php',data,function(response){
        let tasks       = response;
        let template    = '';
        tasks.forEach(data =>{
          template += `<tr taskid="${data.id}"><td>${data.id}</td><td>${data.a}</td><td>${data.b}</td><td>${data.name}</td><td>${data.typ}</td><td class="txt-center"><button class="myBtnUp btn-update fa fa-pencil"></button></td></tr>`
        });
        $(HT).html(template);
      },'json');
    }
    if(CRUD==='c'|| CRUD==='u'){ 
      const data={crud:CRUD,cod:COD,id:$(ID).val(),name:$(NAME).val(),ty:$(TYPE).val()};
      $.post('tool/crud-prod.php',data,function(response){
        if(response!=''){window.alert(response)}
      });
    }
    if(CRUD==='d'){ 
      const data={crud:CRUD,cod:COD,id:ID,name:NAME,ty:TYPE};
      $.post('tool/crud-prod.php',data,function(response){
        if(response!=''){window.alert(response)}
      });
    }
  },
  crud_prod_type: function(HT,CRUD,ID,NAME){
    if(CRUD==='r'|| CRUD==='s'){
      const data={
        crud:CRUD,id:ID,name:NAME};
      $.post('tool/crud-prod-type.php',data,function(response){
        let tasks       = response;
        let template    = '';
        tasks.forEach(data =>{
          template += `<tr taskid="${data.id}"><td>${data.id}</td><td>${data.name}</td><td class="txt-center"><button class="myBtnUp btn-update fa fa-pencil"></button><button class="delete btn-delete fa fa-trash"></button></td></tr>`
        });
        $(HT).html(template);
      },'json');
    }
    if(CRUD==='c'|| CRUD==='u'||CRUD==='d'){ 
      const data={crud:CRUD,id:ID,name:NAME};
      $.post('tool/crud-prod-type.php',data,function(response){
        if(response!=''){window.alert(response)}
      });
    }
  },
//proveedor
  crud_prov: function(HT,CRUD,COD,ID,NAME,FONO,EMAIL){
    if(CRUD==='r'|| CRUD==='s'){
      const data={
        crud:CRUD,cod:COD,id:ID,name:NAME,fono:FONO,email:EMAIL};
      $.post('tool/crud-prov.php',data,function(response){
        let tasks       = response;
        let template    = '';
        tasks.forEach(data =>{
          template += `<tr taskid="${data.id}"><td>${data.id}</td><td>${data.name}</td><td>${data.fon}</td><td>${data.ema}</td><td class="txt-center"><button class="myBtnUp btn-update fa fa-pencil"></button><button class="delete btn-delete fa fa-trash"></button></td></tr>`
        });
        $(HT).html(template);
      },'json');
    }
    if(CRUD==='rp'){
      const data={
        crud:CRUD,cod:COD,id:ID,name:NAME,fono:FONO,email:EMAIL};
        $.post('tool/crud-prov.php',data,function(response){
        if (response != 'null'){
          let len = response.length;
          for( let i = 0; i<len; i++){
            let id = response[i]['id'];
            let prv = response[i]['name'];
            $(HT).append("<option value='"+id+"'>"+prv+"</option>");
          }
        }
        else{$(HT).html('<option>no_data</option>');}
      },'json');
    }
    if(CRUD==='c'|| CRUD==='u'){ 
      const data={crud:CRUD,cod:COD,id:$(ID).val(),name:$(NAME).val(),fono:$(FONO).val(),email:$(EMAIL).val()};
      $.post('tool/crud-prov.php',data,function(response){
        if(response!=''){window.alert(response)}
      });
    }
    if(CRUD==='d'){ 
      const data={crud:CRUD,cod:COD,id:ID,name:NAME,fono:FONO,email:EMAIL};
      $.post('tool/crud-prov.php',data,function(response){
        if(response!=''){window.alert(response)}
      });
    }
  },
//usuario
  crud_user: function(HT,CRUD,COD,ID,NAME,PASS,ROL,CONT){
    if(CRUD==='r'|| CRUD==='s'){
      const data={
        crud:CRUD,cod:COD,id:ID,name:NAME,pas:PASS,rol:ROL,cont:CONT};
      $.post('tool/crud-user.php',data,function(response){
        let tasks       = response;
        let template    = '';
        tasks.forEach(data =>{
          template += `<tr taskid="${data.id}"><td>${data.id}</td><td>${data.name}</td><td>${data.con}</td><td>${data.rol}</td><td class="txt-center"><button class="myBtnUp btn-update fa fa-pencil"></button><button class="delete btn-delete fa fa-trash"></button></td></tr>`
        });
        $(HT).html(template);
      },'json');
    }
    if(CRUD==='c'|| CRUD==='u'){ 
      const data={crud:CRUD,cod:COD,id:$(ID).val(),name:$(NAME).val(),pas:$(PASS).val(),cont:$(CONT).val(),rol:$(ROL).val()};
      $.post('tool/crud-user.php',data,function(response){
        if(response!=''){window.alert(response)}
      });
    }
    if(CRUD==='d'){ 
      const data={crud:CRUD,cod:COD,id:ID,name:NAME,pas:PASS,rol:ROL,cont:CONT};
      $.post('tool/crud-user.php',data,function(response){
        if(response!=''){window.alert(response)}
      });
    }
  },
//caja
  crud_caja: function(HT,CRUD,COD,ID,Q){
    if(CRUD==='r'|| CRUD==='s'){
      const data={
        crud:CRUD,cod:COD,idprod:ID,q:Q};
      $.post('tool/crud-caja.php',data,function(response){
        let tasks       = response;
        let template    = '';
        tasks.forEach(data =>{
          template += `<tr taskid="${data.cod}"><td>${data.id}</td><td>${data.name}</td><td>${data.precio}</td><td>${data.q}</td><td>${data.subtotal}</td><td class="txt-center"><button class="delete btn-delete fa fa-trash"></button></td></tr>`
        });
        $(HT).html(template);
      },'json');
    }
    if(CRUD==='c'|| CRUD==='u'){ 
      const data={crud:CRUD,cod:COD,idprod:$(ID).val(),q:$(Q).val()};
      $.post('tool/crud-caja.php',data,function(response){
        if(response!=''){window.alert(response)}
      });
    }
    if(CRUD==='d'){ 
      const data={crud:CRUD,cod:COD,idprod:ID,q:Q};
      $.post('tool/crud-caja.php',data,function(response){
        if(response!=''){window.alert(response)}
      });
    }
  },
//temporal
  crud_tmp_d_ot: function(HT,CRUD,COD,PD,Q,XYZ,TY){
  //rs
    if(CRUD==='r'|| CRUD==='s'){
      const data={
        crud:CRUD,cod:COD,pd:PD,q:Q,xyz:XYZ,ty:TY
      };
      $.post('tool/crud-tmp-d-ot.php',data,function(response){
        let tasks       = response;
        let template    = '';
        tasks.forEach(data =>{
          template += `<tr taskid="${data.id}"><td>${data.pd}</td><td>${data.nm}</td><td>${data.cP}</td><td>${data.xyz}</td><td>${data.q}</td><td class="txt-center"><button class="myBtnUp btn-update fa fa-pencil"></button><button class="delete btn-delete fa fa-trash"></button></td></tr>`
        });
        $(HT).html(template);
      },'json');
    }
  //cucxyz 
    if(CRUD==='c'||CRUD==='u'||CRUD==='cxyz'||CRUD==='cmxyz'||CRUD==='dxyz'|| CRUD==='d'){ 
      const data={
        crud:CRUD,cod:COD,pd:PD,q:Q,xyz:XYZ,ty:TY
      };
      $.post('tool/crud-tmp-d-ot.php',data,function(response){
        if(response!=''){window.alert(response)}
      });
    }
  },
//proceso
  proc_caja: function(CRUD,CLI,CTY){
    if(CRUD==='p'){ 
      const data={crud:CRUD,cl:CLI,ty:CTY};
      $.post('tool/proc.php',data,function(response){
        if(response!=''){window.alert(response)}
      });
      }
  },
  proc_order: function(CLI,CTY){ 
    const data={cl:CLI,ty:CTY};
    $.post('tool/crud-proc-order.php',data,function(response){
      if(response!=''){window.alert(response)}
    });
  },
  report_boleta: function(HT,CRUD){
    if(CRUD==='b'){
      const data={
        crud:CRUD};
      $.post('tool/report.php',data,function(response){
        let tasks       = response;
        let template    = '';
        tasks.forEach(data =>{
          template += `<tr taskid="${data.id}"><td>${data.id}</td><td>${data.cl}</td><td>${data.dt}</td><td class="txt-center"><button class="myBtnUp btn-update fa fa-pencil"></button><button class="delete btn-delete fa fa-trash"></button></td></tr>`
        });
        $(HT).html(template);
      },'json');
    }
  },
//stock
  crud_stock: function(SLCT,CRUD,COD,PD,XYZ,Q){ 
    if(CRUD==='r'|| CRUD==='sp' || CRUD==='sq' || CRUD==='sx'){
      const data={
        crud:CRUD,cod:COD,pd:PD,xyz:XYZ,q:Q};
      $.post('tool/crud-stock.php',data,function(response){
        let tasks       = response;
        let template    = '';
        tasks.forEach(data =>{
          template += `<tr taskid="${data.id}"><td>${data.id}</td><td>${data.a}</td><td>${data.name}</td><td>${data.cp}</td><td>${data.xyz}</td><td>${data.q}</td><td class="txt-center"><button class="myBtnUp btn-update fa fa-eye"></button></td></tr>`
        });
        $(SLCT).html(template);
      },'json');
    }
    if(CRUD==='c'){
      const data={
        oT: OT,xyz:$(XYZ).val()
      };
      $.post('tool/crud-stock.php',data,function(response){
        //$('#form-rev').trigger('reset');
      });
    }
  //select
    if(CRUD==='rsxyz'){
      const data={crud:CRUD,cod:COD,pd:PD,xyz:XYZ,q:Q};
      $.post('tool/crud-stock.php',data,function(response){
        if (response != 'null'){
          $(SLCT).empty();
          let len = response.length;
          for( let i = 0; i<len; i++){
            let id = response[i]['id'];
            let xyz = response[i]['xyz'];
            $(SLCT).append("<option value='"+id+"'>"+xyz+"</option>");
          }
        }
        else{$(SLCT).html('<option>no_data</option>');}
      },'json');
    }
    if(CRUD==='rxyzid'){
      const data={crud:CRUD,cod:COD,pd:PD,xyz:XYZ,q:Q};
      $.post('tool/crud-stock.php',data,function(response){
        if (response != 'null'){
          $(SLCT).empty();
          let len = response.length;
          for( let i = 0; i<len; i++){
            let a = response[i]['pd'];
            let nm = response[i]['nm'];
            let cp = response[i]['cp'];
            let xyz = response[i]['xyz'];
            let q = response[i]['q'];
            $(SLCT).append("<option value='"+a+"'>"+a+" "+nm+" "+cp+" "+xyz+" "+q+"</option>");
          }
        }
        else{$(SLCT).html('<option>no_data</option>');}
      },'json');
    }
    if(CRUD==='ridxyz' || CRUD==='rxyz' ){
      const data={crud:CRUD,cod:COD,pd:PD,xyz:XYZ,q:Q};
      $.post('tool/crud-stock.php',data,function(response){
        $(SLCT).prop('selectedIndex',0);
        if (response != 'null'){
          let len = response.length;
          for( let i = 0; i<len; i++){
            let xyz = response[i]['xyz'];
            $(SLCT).append("<option value='"+xyz+"'>"+xyz+"</option>");
          }
        }
        else{$(SLCT).html('<option>no_data</option>');}
      },'json');
    }
  },
//order
  crud_order: function(SLCT,CRUD,OT){ 
      if(CRUD==='r'|| CRUD==='sp' || CRUD==='sq' || CRUD==='sx'){
      const data={crud:CRUD,ot:OT};
      $.post('tool/crud-order.php',data,function(response){
        let tasks       = response;
        let template    = '';
        tasks.forEach(data =>{
            template += `<tr taskid="${data.id}"><td>${data.id}</td><td>${data.date}</td><td>${data.type}</td><td>${data.cl}</td><td>${data.user}</td><td class="txt-center"><button id="a" class="myBtnEye btn-eye fa fa-eye"></button><button class="myBtnPdf btn-pdf fa fa-file-pdf-o"></button></td></tr>`
        });
        $(SLCT).html(template);
      },'json');
    }
      if(CRUD==='rdt'){
      const data={crud:CRUD,ot:OT};
      $.post('tool/crud-order.php',data,function(response){
        let tasks       = response;
        let template    = '';
        console.log('oeuoe');
        tasks.forEach(data =>{
            template += `<tr taskid="${data.pd}"><td>${data.pd}</td><td>${data.nm}</td><td>${data.tp}</td><td>${data.xyz}</td><td>${data.q}</td></tr>`
        });
        $(SLCT).html(template);
      },'json');
    }
  }
}
