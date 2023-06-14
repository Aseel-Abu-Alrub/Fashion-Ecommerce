
var nav=document.querySelector("nav");
window.addEventListener("scroll",function(){
  if(window.scrollY>190){
    nav.classList.add("navbar-scroll");
  }
  else{
    nav.classList.remove("navbar-scroll");
    

   

  }
})

var nav=document.querySelector('nav');
// start loading


document.querySelector('body').style.overflow='hidden'
var loading=document.querySelector(".loadingg");


window.addEventListener('load',function(){
setTimeout(function(){
    document.querySelector('body').style.overflow='auto';
     loading.style.opacity='0';
     loading.style.visibility='hidden' ;
     loading.style.transform='scale(0)'


},3000)

})
// End loading

function showUsd()
{
    var usd=document.getElementById("usd");
   var x=document.getElementById("usd-men");
   if(x.style.transform=='scaleY(0)'){
    x.style.transform='scaleY(1)';
    usd.style.setProperty('--tran','rotate(180deg)');
   }
  
   else{
    x.style.transform='scaleY(0)';
    usd.style.setProperty('--tran','rotate(0deg)');
   
   }
   
}
function showEn()
{
    var en=document.getElementById("en");
   var x=document.getElementById("en-men");
   if(x.style.transform=='scaleY(0)'){
    x.style.transform='scaleY(1)';
    en.style.setProperty('--tran','rotate(180deg)');
   
   }
  
   else{
    x.style.transform='scaleY(0)';
    en.style.setProperty('--tran','rotate(0deg)');
 

   }
}

///////////

function display(id){
var imgblack=document.getElementById("imgblack");
var imgyellow=document.getElementById("imgyellow");
var imgbrown=document.getElementById("imgbrown");

if(id == 'yellow'){
    imgyellow.style.opacity='1';
    imgblack.style.opacity='0';
    imgbrown.style.opacity='0'
}


else if(id == 'black' ){
    imgblack.style.opacity='1'
    imgyellow.style.opacity='0';
    imgbrown.style.opacity='0';
 
}

else if( id == 'brown'){
    imgbrown.style.opacity='1';
    imgyellow.style.opacity='0';
    imgblack.style.opacity='0'
}

}

function displayshoes(id){
     var shoesw=document.getElementById("shoeswhite");
     var shoesb=document.getElementById("shoesblack");
     var shoesbr=document.getElementById("shoesbrown");
     var demo2=document.getElementById("demo2");
     if(id == 'white'){
        shoesw.style.opacity='1';
        shoesb.style.opacity='0';
      document.getElementById("shoes1").style.opacity='0';
      document.getElementById("shoes2").style.opacity='0';
      demo2.style.opacity='0';
      shoesbr.style.opacity='0';

     }
     else if(id == 'black'){
        shoesb.style.opacity='1';
        shoesw.style.opacity='0';
        document.getElementById("shoes1").style.opacity='0';
        document.getElementById("shoes2").style.opacity='0';
        demo2.style.opacity='0';
        shoesbr.style.opacity='0';
     }
     else if(id == 'brown'){
        shoesb.style.opacity='0';
        shoesw.style.opacity='0';
        document.getElementById("shoes1").style.opacity='0';
        document.getElementById("shoes2").style.opacity='0';
        demo2.style.opacity='0';
        shoesbr.style.opacity='1';
     }
     else if(id == 'dark'){
     shoesb.style.opacity='0';
     shoesw.style.opacity='0';
     document.getElementById("shoes1").style.opacity='1';
     document.getElementById("shoes2").style.opacity='1';
     shoesbr.style.opacity='0';
     demo2.style.opacity='0';

     }
}


// start slicke carousal
$(document).ready(function () {
    $('.list.container-fluid').slick({
      //   change prev and next button
       prevArrow:
        '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-angle-left"></i></button>',
      nextArrow:
        '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-angle-right"></i></button>',
      infinite: true,
      slidesToShow:4,
      slidesToScroll:4,
      responsive:[
        {
          breakpoint:1024,
          settings:{
             slidesToShow:3,
            slidesToScroll:3,
            infinite: true,
          }
         },
        {
         breakpoint:992,
         settings:{
            slidesToShow:3,
           slidesToScroll:3,
           infinite: true,
         }
        },
        {
            breakpoint:768,
            settings:{
               slidesToShow:3,
              slidesToScroll:3,
            }   
        },

        {
            breakpoint:767,
            settings:{
               slidesToShow:2,
              slidesToScroll:2,
            }     
        }
        



      ]
    });
  });

//   End slicke carousal

// start clock
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();
// End clock

function countdownTimeStart(){

    var countDownDate = new Date("Sep 25, 2024 15:00:00").getTime();
    
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
        document.getElementById("demo").innerHTML =days+"d <span class='dott'>:</span> "+ hours + "h <span class='dott'>:</span> "
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

  var countDownDate = new Date("Aug 25, 2023 15:00:00").getTime();
  
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
      document.getElementById("demo2").innerHTML =days+"d : "+ hours + "h : "
      + minutes + "m : " + seconds + "s ";
        // If the count down is over, write some text 
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo2").innerHTML = "EXPIRED";
  }
}, 1000);
}
countdownTimeStart2();

document.getElementById("displayp").onclick=function(){
  var hat=document.getElementById("hat");
  if(hat.style.transform == 'scale(0)'){
    hat.style.transform = 'scale(1)'
  }
  else
  hat.style.transform ='scale(0)'
}

document.getElementById("displayS").onclick=function(){
  var shirt=document.getElementById("shirt");
  if(shirt.style.transform == 'scale(0)'){
    shirt.style.transform = 'scale(1)'
  }
  else
  shirt.style.transform ='scale(0)'
}


$(document).ready(function () {
  $('.carousell').slick({
    //   change prev and next button

    prevArrow:
      '<button id="slick-prevv" class="slick-prevv  border border-0 bg-transparent" aria-label="Previous" type="button"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button id="slick-nextt" class="slick-nextt border border-0 bg-transparent" aria-label="Next" type="button"><i class="fa-solid fa-angle-right"></i></button>',

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive:[
      {
        breakpoint:1024,
        settings:{
           slidesToShow:3,
          slidesToScroll:3,
          infinite: true,
        }
       },
      {
       breakpoint:992,
       settings:{
          slidesToShow:2,
         slidesToScroll:2,
         infinite: true,
       }
      },
      {
          breakpoint:768,
          settings:{
             slidesToShow:2,
            slidesToScroll:2,
          }   
      },

      {
          breakpoint:767,
          settings:{
             slidesToShow:1,
            slidesToScroll:1,
          }     
      }
      



    ]
  });
});

$(document).ready(function () {
  $('.carouseli').slick({
    //   change prev and next button

    prevArrow:
      '<button class="slick-previ  border border-0 bg-transparent" aria-label="Previous" type="button"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button  class="slick-nexti border border-0 bg-transparent" aria-label="Next" type="button"><i class="fa-solid fa-angle-right"></i></button>',

    infinite: true,
    slidesToShow:6,
    slidesToScroll:6,
    responsive:[
     
      {
       breakpoint:992,
       settings:{
          slidesToShow:4,
         slidesToScroll:4,
         infinite: true,
       }
      },
    

      {
          breakpoint:767,
          settings:{
             slidesToShow:3,
            slidesToScroll:3,
          }     
      }
      



    ]
  });
});

var carousaal=document.querySelectorAll(".carousell-item");
carousaal.forEach(
  
  e1=> e1.addEventListener('mouseenter',function(){
  e1.style.backgroundColor="#f0f0f0"
  e1.style.transition="0.6s"
   
  })
 
  
  );

  carousaal.forEach(
  e1=> e1.addEventListener('mouseleave',function(){
    e1.style.backgroundColor="white"
    })
   
    
    );
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

    new WOW().init();



