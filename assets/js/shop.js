
var navv=document.querySelector('.navbar');


window.addEventListener('scroll',function(){
  if(window.scrollY>=30){
    navv.style.backgroundColor='white'
    navv.style.boxShadow='0 0 10px 0 rgba(0,0,0,0.4)'
    navv.style.transition='1s';
    navv.style.paddingBottom='20px'

  }
  else{
    navv.style.backgroundColor='transparent'
    navv.style.boxShadow='0 0 0 0 rgba(0,0,0,0.4)'

  }
})

var nav=document.querySelector('nav');
nav.style.opacity='0';

document.querySelector('body').style.overflow='hidden'
var loading=document.querySelector(".loading");


window.addEventListener('load',function(){
setTimeout(function(){
    nav.style.opacity='1';
    document.querySelector('body').style.overflow='auto';
     loading.style.opacity='0';
     loading.style.visibility='hidden' ;
     loading.style.transform='scaleX(0)'


},2000);

});


$(document).ready(function () {
    $('.carousels').slick({
      //   change prev and next button
  
      prevArrow:
        '<button class="slick-prev" aria-label="Previous" type="button"></button>',
      nextArrow:
        '<button class="slick-next" aria-label="Next" type="button"></button>',
  
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,

      responsive:[
        {
          breakpoint:1199,
          settings:{
             slidesToShow:4,
            slidesToScroll:4,
            infinite: true,
          }
         },
        {
         breakpoint:768,
         settings:{
            slidesToShow:3,
           slidesToScroll:3,
           infinite: true,
         }
        },
      

       

      ]
    });
    
  });

  let img=document.querySelectorAll('.link img');
  var links=document.querySelectorAll('.link');
  
  links.forEach(e1=>{
    e1.classList.remove('borderr')
   e1.addEventListener('click',function(e){
       e.preventDefault();
      //  if(e1.classList.contains('borderr')){
      //  e1.classList.remove('borderr')
      //  }
      //  else{
      //   e1.classList.add('borderr')
      //  }
      
   });
  });

 
    var rec1=document.getElementById("rec1");
    var rec2=document.getElementById("rec2");
    var rec3=document.getElementById("rec3");
    var rec4=document.getElementById("rec4");
    var rec5=document.getElementById("rec5");
    var rec6=document.getElementById("rec6");
    var rec7=document.getElementById("rec7");
   

    rec1.onclick=function(){
      rec2.classList.remove('scale-img')
      rec3.classList.remove('scale-img')
      rec4.classList.remove('scale-img')
      rec5.classList.remove('scale-img')
      rec6.classList.remove('scale-img')
      rec7.classList.remove('scale-img')
      links[1].classList.remove('borderr');
      links[2].classList.remove('borderr');
      links[3].classList.remove('borderr');
      links[4].classList.remove('borderr');
      links[5].classList.remove('borderr');
      links[6].classList.remove('borderr');
      if(rec1.classList.contains('scale-img')){
        rec1.classList.remove('scale-img')
        links[0].classList.remove('borderr');
       
      }
      else{
        rec1.classList.add('scale-img');
        links[0].classList.add('borderr');
      }
      

      
    }
   

    rec2.onclick=function(){
      rec1.classList.remove('scale-img')
      rec3.classList.remove('scale-img')
      rec4.classList.remove('scale-img')
      rec5.classList.remove('scale-img')
      rec6.classList.remove('scale-img')
      rec7.classList.remove('scale-img')
      links[2].classList.remove('borderr');
      links[3].classList.remove('borderr');
      links[4].classList.remove('borderr');
      links[5].classList.remove('borderr');
      links[6].classList.remove('borderr');
      links[0].classList.remove('borderr');

      if(rec2.classList.contains('scale-img')){
        rec2.classList.remove('scale-img')
        links[1].classList.remove('borderr');
      }
      else{
        rec2.classList.add('scale-img')
        links[1].classList.add('borderr');
      }
   
    }

    rec3.onclick=function(){
      rec2.classList.remove('scale-img')
      rec1.classList.remove('scale-img')
      rec4.classList.remove('scale-img')
      rec5.classList.remove('scale-img')
      rec6.classList.remove('scale-img')
      rec7.classList.remove('scale-img')
      links[1].classList.remove('borderr');
      links[0].classList.remove('borderr');
      links[3].classList.remove('borderr');
      links[4].classList.remove('borderr');
      links[5].classList.remove('borderr');
      links[6].classList.remove('borderr');

      if(rec3.classList.contains('scale-img')){
        rec3.classList.remove('scale-img')
        links[2].classList.remove('borderr');
        
      }
      else{
      rec3.classList.add('scale-img');
      links[2].classList.add('borderr');
      }
    }
   

    rec4.onclick=function(){
      
      rec1.classList.remove('scale-img')
      rec2.classList.remove('scale-img')
      rec3.classList.remove('scale-img')
      rec5.classList.remove('scale-img')
      rec6.classList.remove('scale-img')
      rec7.classList.remove('scale-img')
      links[1].classList.remove('borderr');
      links[0].classList.remove('borderr');
      links[2].classList.remove('borderr');
      links[4].classList.remove('borderr');
      links[5].classList.remove('borderr');
      links[6].classList.remove('borderr');
      

      if(rec4.classList.contains('scale-img')){
        rec4.classList.remove('scale-img')
        links[3].classList.remove('borderr');

      }
      else{
      rec4.classList.add('scale-img')
      links[3].classList.add('borderr');
      }
    }

    rec5.onclick=function(){
      rec1.classList.remove('scale-img')
      rec2.classList.remove('scale-img')
      rec3.classList.remove('scale-img')
      rec4.classList.remove('scale-img')
      rec6.classList.remove('scale-img')
      rec7.classList.remove('scale-img')
      links[1].classList.remove('borderr');
      links[0].classList.remove('borderr');
      links[2].classList.remove('borderr');
      links[3].classList.remove('borderr');
      links[5].classList.remove('borderr');
      links[6].classList.remove('borderr');
      

      if(rec5.classList.contains('scale-img')){
        rec5.classList.remove('scale-img')
        links[4].classList.remove('borderr');
      }
      else{
      rec5.classList.add('scale-img')
      links[4].classList.add('borderr');
      }
    }
    rec6.onclick=function(){
      rec1.classList.remove('scale-img')
      rec2.classList.remove('scale-img')
      rec3.classList.remove('scale-img')
      rec5.classList.remove('scale-img')
      rec4.classList.remove('scale-img')
      rec7.classList.remove('scale-img')
      links[1].classList.remove('borderr');
      links[0].classList.remove('borderr');
      links[2].classList.remove('borderr');
      links[3].classList.remove('borderr');
      links[4].classList.remove('borderr');
      links[6].classList.remove('borderr');
      

      if(rec6.classList.contains('scale-img')){
        rec6.classList.remove('scale-img')
        links[5].classList.remove('borderr');

      }
      else{
      rec6.classList.add('scale-img')
      links[5].classList.add('borderr');

      }
    }

    rec7.onclick=function(){
      rec1.classList.remove('scale-img')
      rec2.classList.remove('scale-img')
      rec3.classList.remove('scale-img')
      rec5.classList.remove('scale-img')
      rec6.classList.remove('scale-img')
      rec4.classList.remove('scale-img')
      links[1].classList.remove('borderr');
      links[0].classList.remove('borderr');
      links[2].classList.remove('borderr');
      links[3].classList.remove('borderr');
      links[4].classList.remove('borderr');
      links[5].classList.remove('borderr');

      if(rec7.classList.contains('scale-img')){
        rec7.classList.remove('scale-img')
        links[6].classList.remove('borderr');
      }
      else{
        rec7.classList.add('scale-img')
      links[6].classList.add('borderr');
      }
     
    }

//     var lowerSlider = document.querySelector('#lower');
// var  upperSlider = document.querySelector('#upper');

// document.querySelector('#two').value=upperSlider.value;
// document.querySelector('#one').value=lowerSlider.value;

// var  lowerVal = parseInt(lowerSlider.value);
// var upperVal = parseInt(upperSlider.value);

// upperSlider.oninput = function () {
//     lowerVal = parseInt(lowerSlider.value);
//     upperVal = parseInt(upperSlider.value);

//     if (upperVal < lowerVal + 4) {
//         lowerSlider.value = upperVal - 4;
//         if (lowerVal == lowerSlider.min) {
//         upperSlider.value = 4;
//         }
//     }
//     document.querySelector('#two').value=this.value
// };

// lowerSlider.oninput = function () {
//     lowerVal = parseInt(lowerSlider.value);
//     upperVal = parseInt(upperSlider.value);
//     if (lowerVal > upperVal - 4) {
//         upperSlider.value = lowerVal + 4;
//         if (upperVal == upperSlider.max) {
//             lowerSlider.value = parseInt(upperSlider.max) - 4;
//         }
//     }
//     document.querySelector('#one').value=this.value
// }; 


// let min_price = 0;
// let max_price = 100;

// $(document).ready(function () {
//     showAllItems();//Display all items with no filter applied
// });

// $('#min-price').on("change mousemove", function () {
//     min_price = parseInt($('#min-price').val());
//     $('#min-price-txt').text('$' + min_price);
//     showItemsFiltered();
// });

// $('#max-price').on("change mousemove", function () {
//     max_price = parseInt($('#max-price').val());
//     $('#max-price-txt').text('$' + max_price);
//     showItemsFiltered();
// });

// let category_items = [
//     {
//         "id": 1,
//         "category_id": 8,
//         "price": 39.42,
//         "title": "Shoes with id #1",
//         "thumbnail": '../img/Rectangle-105-600x600.jpg',
//         "sizes": [
//             "US-MEN-10",
//             "US-MEN-11"
//         ]
//     },
//     {
//         "id": 2,
//         "category_id": 8,
//         "price": 31.93,
//         "title": "Shoes with id #2",
//         "thumbnail": "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
//         "sizes": [
//             "US-MEN-13"
//         ]
//     },
//     {
//         "id": 3,
//         "category_id": 8,
//         "price": 49.44,
//         "title": "Shoes with id #3",
//         "thumbnail": "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
//         "sizes": [
//             "US-MEN-14"
//         ]
//     },
//     {
//         "id": 4,
//         "category_id": 58,
//         "price": 65.38,
//         "title": "Shoes with id #4",
//         "thumbnail": "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
//         "sizes": [
//             "US-MEN-13"
//         ]
//     },
//     {
//         "id": 5,
//         "category_id": 8,
//         "price": 27.21,
//         "title": "Shoes with id #5",
//         "thumbnail": "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
//         "sizes": [
//             "US-MEN-9",
//             "US-MEN-8",
//             "US-MEN-10",
//             "US-MEN-11",
//             "US-MEN-12"
//         ]
//     },
//     {
//         "id": 6,
//         "category_id": 8,
//         "price": 73.05,
//         "title": "Shoes with id #6",
//         "thumbnail": "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
//         "sizes": [
//             "US-MEN-9",
//             "US-MEN-8",
//             "US-MEN-10",
//             "US-MEN-11",
//             "US-MEN-12",
//             "US-MEN-13"
//         ]
//     },
//     {
//         "id": 7,
//         "category_id": 8,
//         "price": 51.96,
//         "title": "Shoes with id #7",
//         "thumbnail": "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
//         "sizes": [
//             "US-MEN-9",
//             "US-MEN-8",
//             "US-MEN-10",
//             "US-MEN-11"
//         ]
//     },
//     {
//         "id": 8,
//         "category_id": 8,
//         "price": 29.35,
//         "title": "Shoes with id #8",
//         "thumbnail": "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
//         "sizes": [
//             "US-MEN-11",
//             "US-MEN-12",
//             "US-MEN-13"
//         ]
//     },
//     {
//         "id": 9,
//         "category_id": 8,
//         "price": 80.00,
//         "title": "Shoes with id #9",
//         "thumbnail": "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
//         "sizes": [
//             "US-MEN-9",
//             "US-MEN-8",
//             "US-MEN-10",
//             "US-MEN-11"
//         ]
//     },
//     {
//         "id": 10,
//         "category_id": 8,
//         "price": 70.07,
//         "title": "Shoes with id #10",
//         "thumbnail": "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
//         "sizes": [
//             "US-MEN-9",
//             "US-MEN-8",
//             "US-MEN-10"
//         ]
//     },
//     {
//         "id": 11,
//         "category_id": 8,
//         "price": 79.37,
//         "title": "Shoes with id #11",
//         "thumbnail": "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
//         "sizes": [
//             "US-MEN-9",
//             "US-MEN-8",
//             "US-MEN-10",
//             "US-MEN-11",
//             "US-MEN-12"
//         ]
//     },
//     {
//         "id": 12,
//         "category_id": 8,
//         "price": 27.14,
//         "title": "Shoes with id #12",
//         "thumbnail": "https://www.transparentpng.com/download/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png",
//         "sizes": [
//             "US-MEN-9",
//             "US-MEN-8",
//             "US-MEN-10",
//             "US-MEN-11"
//         ]
//     }
// ]

// function showAllItems() {//Default grid to show all items on page load in
//     $("#display-items-div").empty();
//     for (let i = 0; i < category_items.length; i++) {
//         let item_content = '<div class="col-12 col-md-4 text-center product-card" data-available-sizes="' + category_items[i]['sizes'] + '"><b>' + category_items[i]['title'] + '</b><br><img src="' + category_items[i]['thumbnail'] + '" height="64" width="64" alt="shoe thumbnail"><p>$' + category_items[i]['price'] + '</p></div>';
//         $("#display-items-div").append(item_content);
//     }
// }

// function showItemsFiltered() {//Default grid to show all items on page load in
//     $("#display-items-div").empty();
//     for (let i = 0; i < category_items.length; i++) {//Go through the items but only show items that have size from show_sizes_array
//         if (category_items[i]['price'] <= max_price && category_items[i]['price'] >= min_price) {
//             let item_content = '<div class="col-12 col-md-4 text-center product-card" data-available-sizes="' + category_items[i]['sizes'] + '"><b>' + category_items[i]['title'] + '</b><br><img src="' + category_items[i]['thumbnail'] + '" height="64" width="64" alt="shoe thumbnail"><p>$' + category_items[i]['price'] + '</p></div>';
//             $("#display-items-div").append(item_content);//Display in grid
//         }
//     }
// }

const slider = document.getElementById("max-price")
const min = slider.min
const max = slider.max
const value = slider.value

slider.style.setProperty('--blk', `linear-gradient(to right, black 0%, black ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`) 

slider.oninput = function() {
  this.style.setProperty('--blk', `linear-gradient(to right, black 0%, black ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`) 
};


let Hoodie=document.getElementById('Hoodie');
  let gray=document.getElementById('gray')
 
  
function display(id){
  var imgblack=document.getElementById("imgblack");
  var imgyellow=document.getElementById("imgyellow");
  var imgbrown=document.getElementById("imgbrown");
  var imggray=document.getElementById("imgray");

 

  if(id == 'yellow'){
    imgblack.style.opacity='0';
    imgbrown.style.opacity='0'
     imgyellow.style.opacity='1'
     
      
  }
  
  
  else if(id == 'black' ){
      imgblack.style.opacity='1'
      imgyellow.style.opacity='0';
      imgbrown.style.opacity='0';
   
  }
  else if(id == 'brown' ){
    imgblack.style.opacity='0'
    imgyellow.style.opacity='0';
    imgbrown.style.opacity='1';
 
}
  else if( id == 'gray'){
      imgbrown.style.opacity='0';
      imgyellow.style.opacity='0';
      imgblack.style.opacity='0'
      imggray.style.opacity='1'
  }
 
 
  }

  function display2(id){
    var imgblk=document.getElementById("imgblk");
    var imgred=document.getElementById("imgred");
    var imgwhite=document.getElementById("imgwhite");
    var fader=document.getElementById("fadershirt");
    

    if(id == 'red'){
      imgblk.style.opacity='0';
      imgwhite.style.opacity='0'
       imgred.style.opacity='1'
    
        
    }
    
    
    else if(id == 'blk' ){
      imgblk.style.opacity='1';
      imgwhite.style.opacity='0'
       imgred.style.opacity='0'
   
     
    }
    
    else if(id == 'white' ){
      imgblk.style.opacity='0';
      imgwhite.style.opacity='1'
       imgred.style.opacity='0'
      
  }
  imgred.style.opacity='1';
 
   
   
    }
  
    function displayt(id){
      var tred=document.getElementById("tred");
      var tbrown=document.getElementById("tbrown");
      var tblue=document.getElementById("tblue");
      // var fader=document.getElementById("fadershirt");
      
  
      if(id == 'blue'){
       tred.style.opacity='0';
        tbrown.style.opacity='0'
         tblue.style.opacity='1'
      
          
      }
      
  
      else if(id == 'beige' ){
        tbrown.style.opacity='1';
        tblue.style.opacity='0'
         tred.style.opacity='0'
     
       
      }
      
      else if(id == 'redd' ){
       tblue.style.opacity='0';
        tred.style.opacity='1'
         tbrown.style.opacity='0'
        
    }
    tred.style.opacity='1';
   
     
     
      }
      function display3(id){
        var tgrn=document.getElementById("tgrn");
        var tbrick=document.getElementById("tbrick");
        var tblack=document.getElementById("tblack");
        // var fader=document.getElementById("fadershirt");
        
    
        if(id == 'brick'){
         tgrn.style.opacity='0';
          tblack.style.opacity='0'
           tbrick.style.opacity='1'
        
            
        }
        
    
        else if(id == 'blackk' ){
          tblack.style.opacity='1';
          tbrick.style.opacity='0'
           tgrn.style.opacity='0'
       
         
        }
        
        else if(id == 'greenn' ){
         tbrick.style.opacity='0';
          tgrn.style.opacity='1'
           tblack.style.opacity='0'
          
      }
      tred.style.opacity='1';
     
     
        }

    let size=document.querySelectorAll('.product-item .size-list span');
    let orange=document.getElementById('orange');
    let grn=document.getElementById('ggreen');
    let whitee=document.getElementById('whitee');
    let black=document.getElementById('blaack');
    let man=document.getElementById('man')
    for(let i=0 ; i<size.length ;i++){
      size[i].addEventListener('click',function(e){
        if (e.target.innerHTML == 'XL'){
          orange.style.opacity='1';
          grn.style.opacity='0'
          whitee.style.opacity='0'
          black.style.opacity='0'
          man.style.opacity='1'

        }
        else if(e.target.innerHTML == 'L'){
          orange.style.opacity='0';
          grn.style.opacity='0'
          whitee.style.opacity='1'
          black.style.opacity='0'
          man.style.opacity='0'

        }
        else if(e.target.innerHTML == 'M'){
          orange.style.opacity='0';
          grn.style.opacity='0'
          whitee.style.opacity='0'
          black.style.opacity='1'
          man.style.opacity='0'

        }
        else if(e.target.innerHTML == 'S'){
          orange.style.opacity='0';
          grn.style.opacity='1'
          whitee.style.opacity='0'
          black.style.opacity='0'
          man.style.opacity='0'

        }
      

             
      });
    }



    let colors=document.querySelectorAll('.product-item .colorss span');
    let pink=document.getElementById('tpink');
    let tbrwn=document.getElementById('tbrwn');
    let tblk=document.getElementById('tblk');
    let mann=document.getElementById('mman')
    for(let i=0 ; i<colors.length ;i++){
      colors[i].addEventListener('click',function(e){
       if(e.target.id == 'pink'){
         pink.style.opacity='1';
         tbrwn.style.opacity='0';
         tblk.style.opacity='0';
         mann.style.opacity='0'
       }
       else if(e.target.id == 'blkk'){
        pink.style.opacity='0';
        tbrwn.style.opacity='0';
        tblk.style.opacity='1';
        mann.style.opacity='0'
      }
      else  if(e.target.id == 'beigee'){
        pink.style.opacity='0';
        tbrwn.style.opacity='1';
        tblk.style.opacity='0';
        mann.style.opacity='1'
      }
      
     
      

             
      });
    }
function countdownTimeStart(){

  var countDownDate = new Date("May 25, 2024 15:00:00").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
      // Get todays date and time
      var now = new Date().getTime();
      
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Output the result in an element with id="demo"
      document.getElementById("demo2").innerHTML =days+"d <span class='dott'>:</span> "+ hours + "h <span class='dott'>:</span> "
      + minutes + "m <span class='dott'>:</span> " + seconds + "s ";
      document.getElementById("demo3").innerHTML =days+"d <span class='dott'>:</span> "+ hours + "h <span class='dott'>:</span> "
      + minutes + "m <span class='dott'>:</span> " + seconds + "s ";
        // If the count down is over, write some text 
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
}
countdownTimeStart();
  
function countdownTimeStart2(){

  var countDownDate = new Date("Jun 25, 2024 15:00:00").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
      // Get todays date and time
      var now = new Date().getTime();
      
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Output the result in an element with id="demo"

      document.getElementById("demo3").innerHTML =days+"d <span class='dott'>:</span> "+ hours + "h <span class='dott'>:</span> "
      + minutes + "m <span class='dott'>:</span> " + seconds + "s ";
        // If the count down is over, write some text 
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
}
countdownTimeStart2();

function countdownTimeStart3(){

  var countDownDate = new Date("May 25, 2024 15:00:00").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
      // Get todays date and time
      var now = new Date().getTime();
      
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Output the result in an element with id="demo"

      document.getElementById("demo4").innerHTML =days+"d <span class='dott'>:</span> "+ hours + "h <span class='dott'>:</span> "
      + minutes + "m <span class='dott'>:</span> " + seconds + "s ";
        // If the count down is over, write some text 
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
}
countdownTimeStart3();

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos >500) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
 
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

let wish=document.querySelectorAll('.sm-wish');
for(let i=0 ; i<wish.length ; i++){
  wish[i].addEventListener('click',function(e){
    e.preventDefault();
   

  })
}
let heart=document.querySelectorAll('.sm-wish i')
for(let i=0 ; i<heart.length ; i++){
  heart[i].addEventListener('click',function(e){
    e.preventDefault();
    heart[i].classList.toggle('fa-solid')

  })
}
let load=document.querySelector('.load-more');
let loadd2=document.querySelector('.load-more2');

let spinner=document.querySelector('.load .spinner');
let spinner2=document.querySelector('.load2 .spinner');

let products=document.querySelectorAll('.product-item2');
let products2=document.querySelectorAll('.product-item3');

let para=document.querySelector('.load2 p');

let prog=document.querySelector('.show-progress span')
let prog2=document.querySelector('.show-progress2 span')
let load2=document.querySelector('.load')
let loadd=document.querySelector('.load2')

load.addEventListener('click',function(){
 setTimeout(function(){
  products.forEach((e)=>{
    e.style.display='block'
    para.innerHTML="Showing 13–24 of 27 item(s)"
    // prog.style.width='90%'
    spinner.classList.remove('spinner-border')
    load.innerHTML="Load More"
    loadd.style.margin="100px 10px 40px 10px"
    load2.style.display='none';
    loadd.style.display='block';
    prog2.style.width='90%'




  })
 },2000)

  load.innerHTML=""
  spinner.classList.add('spinner-border');
 

})
let prod=document.querySelector('.no-product');
loadd2.addEventListener('click',function(){
  setTimeout(function(){
   products2.forEach((e)=>{
     e.style.display='block'
     para.innerHTML="Showing 25–27 of 27 item(s)"
     prog2.style.width='100%'
     spinner2.classList.remove('spinner-border')
     loadd2.innerHTML="Load More"
     loadd2.classList.add('disabled')
     loadd.style.margin="60px 10px 40px 10px"
      
      
   })
  },2000)
 
   loadd2.innerHTML=""
   spinner2.classList.add('spinner-border');

 
 })


// const slider2 = document.getElementById("min-price")
// const min2 = slider2.min
// const max2 = slider2.max
// const value2 = slider2.value

// slider2.style.setProperty('--blk', `linear-gradient(to right, red 0%, red ${(value2-min2)/(max2-min2)*100}%, #DEE2E6 ${(value2-min2)/(max2-min2)*100}%, #DEE2E6 100%)`) 

// slider2.oninput = function() {
//   this.style.setProperty('--blk', `linear-gradient(to right, red 0%, red ${(this.value2-this.min2)/(this.max2-this.min2)*100}%, #DEE2E6 ${(this.value2-this.min2)/(this.max2-this.min2)*100}%, #DEE2E6 100%)`) 
// };


// $(document).ready(function(){
//   $('.rec1').hover(function(){
// $(this).attr('src','assets/img/Rectangle-9-600x600.jpg').css('transition','1s')


    
//   },
//   function(){
//    $(this).attr('src','assets/img/Rectangle-20-600x600.jpg').css('transition','1s')
    

    
// });
// });


// $('.fader').hover(function(){
//   $(this).find('img:last').fadeToggle(500);
// });



