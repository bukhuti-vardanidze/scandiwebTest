                /* dvd-check */
function enable(){
 var  productCheck = document.getElementById('checkA');
 var  addButton = document.getElementById('addDel')
    if(productCheck.checked == true){
        addButton.style.display = 'block'
    } else {
        addButton.style.display = 'none'

    }
}


function enableB(){
    var  productCheck = document.getElementById('checkB');
    var  addButton = document.getElementById('addDel')
       if(productCheck.checked == true){
           addButton.style.display = 'block'
       } else {
           addButton.style.display = 'none'
   
       }
   }

   function enableC(){
    var  productCheck = document.getElementById('checkC');
    var  addButton = document.getElementById('addDel')
       if(productCheck.checked == true){
           addButton.style.display = 'block'
       } else {
           addButton.style.display = 'none'
   
       }
   }


   function enableD(){
    var  productCheck = document.getElementById('checkD');
    var  addButton = document.getElementById('addDel')
       if(productCheck.checked == true){
           addButton.style.display = 'block'
       } else {
           addButton.style.display = 'none'
   
       }
   }


                          /*book-ck */

    function enableSecA(){
    var  productCheck = document.getElementById('checkSec1');
    var  addButton = document.getElementById('addDel')
    if(productCheck.checked == true){
        addButton.style.display = 'block'
    } else {
        addButton.style.display = 'none'

    }
}

function enableSecB(){
    var  productCheck = document.getElementById('checkSec2');
    var  addButton = document.getElementById('addDel')
    if(productCheck.checked == true){
        addButton.style.display = 'block'
    } else {
        addButton.style.display = 'none'

    }
}


function enableSecC(){
    var  productCheck = document.getElementById('checkSec3');
    var  addButton = document.getElementById('addDel')
    if(productCheck.checked == true){
        addButton.style.display = 'block'
    } else {
        addButton.style.display = 'none'

    }
}

function enableSecD(){
    var  productCheck = document.getElementById('checkSec4');
    var  addButton = document.getElementById('addDel')
    if(productCheck.checked == true){
        addButton.style.display = 'block'
    } else {
        addButton.style.display = 'none'

    }
}

                           /* furniture */


function enablethrA(){
    var  productCheck = document.getElementById('checkthr1');
    var  addButton = document.getElementById('addDel')
    if(productCheck.checked == true){
        addButton.style.display = 'block'
    } else {
        addButton.style.display = 'none'

    }
}   


function enablethrB(){
    var  productCheck = document.getElementById('checkthr2');
    var  addButton = document.getElementById('addDel')
    if(productCheck.checked == true){
        addButton.style.display = 'block'
    } else {
        addButton.style.display = 'none'

    }
}   



function enablethrC(){
    var  productCheck = document.getElementById('checkthr3');
    var  addButton = document.getElementById('addDel')
    if(productCheck.checked == true){
        addButton.style.display = 'block'
    } else {
        addButton.style.display = 'none'

    }
}   



function enablethrD(){
    var  productCheck = document.getElementById('checkthr4');
    var  addButton = document.getElementById('addDel')
    if(productCheck.checked == true){
        addButton.style.display = 'block'
    } else {
        addButton.style.display = 'none'

    }
}   



   /*prduct list */

  //list

  function getDVDList(){
   var x = document.getElementById('list').value;
   if(x == "DVD"){
      document.getElementById('dvdFun').style.display = 'block'
      document.getElementById('bookFun').style.display = 'none'
      document.getElementById('furnitureFun').style.display = 'none'
    } else 
        if(x == "Book"){
           document.getElementById('dvdFun').style.display = 'none'
           document.getElementById('bookFun').style.display = 'block'
            document.getElementById('furnitureFun').style.display = 'none'
    } else 
    if(x == "Furniture"){
        document.getElementById('dvdFun').style.display = 'none'
        document.getElementById('bookFun').style.display = 'none'
         document.getElementById('furnitureFun').style.display = 'block'
       }
    else
    if(x == "select"){
        document.getElementById('dvdFun').style.display = 'none'
        document.getElementById('bookFun').style.display = 'none'
         document.getElementById('furnitureFun').style.display = 'none'
       }

  
  }


  


   function save(){
  let saveBt = document.getElementById('savePr')
  let sectionDv = document.getElementById('section')
    if(saveBt.checked == true){
        sectionDv.style.display = 'none'
    }   else {

    }


}
 