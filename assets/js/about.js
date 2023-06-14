var nav2=document.querySelector('nav');
window.addEventListener("scroll",function(){
    if(window.scrollY>100){
      nav2.classList.add("navbar-scroll");
    }
    else{
        nav2.classList.remove("navbar-scroll");
        
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

})



$(document).ready(function () {
    $('.carouselii').slick({
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

  $(document).ready(function () {
    $('.carousels').slick({
      //   change prev and next button
  
      prevArrow:
        '<button class="slick-prev" aria-label="Previous" type="button"></button>',
      nextArrow:
        '<button class="slick-next" aria-label="Next" type="button"></button>',
  
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,

      responsive:[
        {
          breakpoint:1199,
          settings:{
             slidesToShow:3,
            slidesToScroll:3,
            infinite: true,
          }
         },
        {
         breakpoint:768,
         settings:{
            slidesToShow:2,
           slidesToScroll:2,
           infinite: true,
         }
        },
      

       

      ]
    });
    
  });

  let calccScrollValue = () => {
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
  window.onscroll = calccScrollValue;
  window.onload = calccScrollValue;