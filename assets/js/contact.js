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
let calcScrollValuee = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos >300) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
 
};
window.onscroll = calcScrollValuee;
window.onload = calcScrollValuee;