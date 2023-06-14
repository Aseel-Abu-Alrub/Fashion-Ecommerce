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

// scroll to top
let calcScrollValuee2 = () => {
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
  window.onscroll = calcScrollValuee2;
  window.onload = calcScrollValuee2;
  
