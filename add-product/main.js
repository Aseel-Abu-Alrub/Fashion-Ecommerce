
var cname=document.getElementById("cname");
var cname2=document.getElementById("cname2");
var ccategory=document.getElementById("ccategory");
var cprice=document.getElementById("cprice");
var addbtn=document.getElementById("addbtn");
var currentindex=0;
var data=document.getElementById("data");
var search=document.getElementById("search");
var update=document.getElementById("updatebtn");
var cnvalid = false;
var ccvalid = false;
var cpvalid = false;
var cdvalid = false;
var capacityvalid = false;

var products;
if(JSON.parse(localStorage.getItem('products') === null)){
products=[];
}
else{
  products=JSON.parse(localStorage.getItem('products'));

}


displayData();

// function checkinputs(){
//   if( ccvalid && cpvalid && cdvalid && capacityvalid){
//     addbtn.removeAttribute('disabled');
   
//   }
//   else{
//     addbtn.setAttribute('disabled','disabled');

//   }
// }
// cname.classList.add("is-valid") to add class in js
// addbtn.disabled=true;
addbtn.onclick=function(event){
    event.preventDefault();
    
         addproduct();
         resetData();
         cprice.classList.remove("is-valid");
         cname.classList.remove("is-valid");
         cname2.classList.remove("is-valid");

         ccategory.classList.remove("is-valid");
        //  addbtn.disabled=true;
         displayData();
   
    console.log(products)
}







function resetData(){
cname.value=''
cname2.value=''
ccategory.value=''
cprice.value='' 

}

var newimage=''
function getImage(imagename){
 newimage=imagename.replace(/^.*\\/,"")
}

var newimage2=''
function getImage2(imagename){
 newimage2=imagename.replace(/^.*\\/,"")
}

function addproduct(){
    
  var product={
      
      ccategory:ccategory.value,
      cprice:cprice.value,
      
      }
    
      

      products.push(product);
     localStorage.setItem('products',JSON.stringify(products));
     localStorage.setItem('recent-img',newimage);
     localStorage.setItem('recent-img2',newimage2);

      
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      
}


function displayData(){
  var result=``;
for(var i=0;i<products.length;i++){
result+=`
<div class="col-lg-4 col-6  mt-4 pt-2">
<div class="product-item  text-center position-relative">
  <a href="" data-tooltip="Wishlist" class="sm-wish"><i class="fa-regular fa-heart"></i></a>
  <a href="" class="fader fader-hot">
    <img src="../assets/img/${localStorage.getItem('recent-img')}" class="w-100 img-fluid" alt="">
    <img src="../assets/img/${localStorage.getItem('recent-img2')}" class="w-100 img-fluid" alt="">

    
   <p class="m-0 p-0 mt-3">${products[i].ccategory}</p>
  </a>
  <div class="icons-link mt-5 pt-5 ">
    <a href="" data-tooltip="Add to Cart"><i class="fa-solid fa-bag-shopping"></i></a>
    <a href="" data-tooltip="Wishlist"><i class="fa-regular fa-heart"></i></a>
    <a href="" data-tooltip="Compare"><i class="fa-solid fa-arrows-split-up-and-left"></i></a>
    <a href="" data-tooltip="Quick View" class="d-none d-sm-none d-lg-inline-flex align-items-center justify-content-center mt-3"><i class="fa-regular fa-eye d-none d-sm-none d-lg-block"></i></a>
  </div>
   <span>$${products[i].cprice}</span><br>
   <button class="btn btn-info mt-4" onclick="getItem(${i})"> updata </button>
   <button class="btn btn-danger mt-4" onclick="deleteproduct(${i})" > delete </button>
</div>
</div>

`
}
data.innerHTML=result

}



document.getElementById("delete").onclick=function(){

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        
      }).then((result) => {
        
        if (result.isConfirmed) {
            products=[];
           data.innerHTML=""
           localStorage.setItem('products',JSON.stringify(products));
           Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })


}

function deleteproduct(index){


    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        
      }).then((result) => {
        
        if (result.isConfirmed) {
            products.splice(index,1);
            displayData();
            localStorage.setItem('products',JSON.stringify(products));


          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })

}

search.onkeyup=function(){
    var result=``
  for(var i=0;i<products.length;i++){
    if(products[i].cname.toLowerCase().includes(search.value.toLowerCase())){
        result+=`
<tr>
<td>${i+1}</td>
<td>${products[i].cname}</td>
<td>${products[i].ccategory}</td>
<td>${products[i].cprice}</td>

<td> <button class="btn btn-info" onclick="getItem(${i})"> updata </button></td>
<td> <button class="btn btn-danger" onclick="deleteproduct(${i})" > delete </button> </td>
</tr>


`
    }
  }
  data.innerHTML=result
}

function getItem(index){
  currentindex=index;
 cname.value=products[index].cname;
 cname2.value=products[index].cname2;

 ccategory.value=products[index].ccategory;
 cprice.value=products[index].cprice;
update.classList.replace('d-none','d-inline');
addbtn.style.display='none';
}

update.onclick=function(e){
  e.preventDefault();
  var product={
    cname:cname.value,
    cname2:cname2.value,
    ccategory:ccategory.value,
    cprice:cprice.value,
    
    }
    var preName= products[currentindex].cname;
  products[currentindex].cname=product.cname;
  products[currentindex].cname2=product.cname2;
  products[currentindex].ccategory=product.ccategory;
    products[currentindex].cprice=product.cprice;
 
  localStorage.setItem('products',JSON.stringify(products));
  displayData();

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `${preName} has update successfuly`,
    showConfirmButton: false,
    timer: 1500
  })
  resetData();

}


// function validatecname(){
//     var recname =/^[A-Z][a-z]{2,9}$/;
//     if(recname.test(cname.value)) {
   
//        document.getElementById("cnerror").innerHTML="";
//        cname.classList.remove("is-invalid");
//        cname.classList.add("is-valid");
//        cnvalid=true;
//     }
    
//       else {
        
//        cname.classList.remove("is-valid");
//        cname.classList.add("is-invalid");
//         document.getElementById("cnerror").innerHTML="* name must start capital and contains 3-9 character";
//         cnvalid=false;
     
//     }
//     checkinputs();
// }



// function validatecc(){
//  var reccategory=/^[A-Z][a-z]{2,20}$/;
//  if(reccategory.test(ccategory.value)) {
    
//     document.getElementById("ccerror").innerHTML="";
//     ccategory.classList.remove("is-invalid");
//     ccategory.classList.add("is-valid");
//     ccvalid=true;
    
// }

// else {
          
//     ccategory.classList.remove("is-valid");
//     ccategory.classList.add("is-invalid");
//     document.getElementById("ccerror").innerHTML="* invalid product category";
//     ccvalid=false;
    
//  }
//  checkinputs();
// }

// function validateprice(){
//   var reprice=/^[5-9][0-9]|100$/;
//   if(reprice.test(cprice.value)){
//     document.getElementById("perror").innerHTML="";
//     cprice.classList.remove("is-invalid");
//     cprice.classList.add("is-valid");
//     cpvalid=true;
   
//   }
  
//   else{
//     document.getElementById("perror").innerHTML="*price must between 50-100";
//     ccategory.classList.remove("is-valid");
//     cprice.classList.add("is-invalid");
//     cpvalid=false;
//   }
//   checkinputs();
// }

// cdescription.onkeyup=function(){
//   var redesc=/^[A-Z][A-Za-z0-9]{2,120}$/;
//  if(redesc.test(cdescription.value)) {
    
//     document.getElementById("derror").innerHTML="";
//     cdescription.classList.remove("is-invalid");
//     cdescription.classList.add("is-valid");
//     cdvalid=true;
    
// }

// else {
          
//     cdescription.classList.remove("is-valid");
//     cdescription.classList.add("is-invalid");
//     document.getElementById("derror").innerHTML="*  product description must start capital letter and character between 3-120";
//     cdvalid=false;
    
//  }
//  checkinputs();
// }

// ccapacity.onkeyup=function(){
//   var recap=/^[0-9]{3,4}$/;
//   if(recap.test(ccapacity.value)){
//     document.getElementById("caerror").innerHTML="";
//     ccapacity.classList.remove("is-invalid");
//     ccapacity.classList.add("is-valid");
//     capacityvalid=true;
   
//   }
  
//   else{
//     document.getElementById("caerror").innerHTML="*capacity must between 100-9999";
//     ccapacity.classList.remove("is-valid");
//     ccapacity.classList.add("is-invalid");
//     capacityvalid=false;
//   }
//   checkinputs();
// }

