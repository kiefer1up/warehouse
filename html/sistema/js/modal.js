// Get the modal
$(document).ready(function(){
    var modal   = document.getElementById("myModal");
    let b_up    = document.getElementById("m-btn-up");
    let b_add   = document.getElementById("m-btn-add");
// Get the button that opens the modal
    var bta     = document.getElementById("myBtn");
// When the user clicks on the add button, open the modal
    bta.onclick = function(e) {
        e.preventDefault();
        document.getElementById("f-rec").reset();
        b_add.style.display = "block";
        b_up.style.display = "none";
        modal.style.display = "block";
        let Ha  = $('#f-rec')[0];
        let Ho = Ha.getElementsByTagName('h4');
        Ho[1].style.display = "none";
        Ho[0].style.display = "block";
    }
// When the user clicks on the upp button, open the modal
    $(document).on('click','.myBtnUp',function(){
        let row     = $(this)[0].parentElement.parentElement;
        //---
        let BB      = $(row).attr('taskid');
      //----
        let ce  = row.getElementsByTagName('td');
        let ro  = $('#f-rec')[0]; 
        let OO = ro.getElementsByTagName('p')[0];
        OO.innerHTML= BB;
      for(let i=0;i<ce.length-1;i++){
            let ces = ro.getElementsByTagName('input')[i];
            ces.value= row.getElementsByTagName('td')[i].innerHTML;
        }
        b_add.style.display = "none";
        b_up.style.display = "block";
        let Ha  = $('#f-rec')[0];
        let Ho = Ha.getElementsByTagName('h4');
        Ho[0].style.display = "none";
        Ho[1].style.display = "block";
        //let COD = $(row).attr('taskid');
        modal.style.display = "block";
    })
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          $('#id').empty();
        }
    }
}); 
