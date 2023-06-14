var nav=document.querySelector("nav");
var register=document.getElementById("register");
var links=document.querySelectorAll('.nav-link');
var logo=document.querySelector('.logo');
var bar=document.querySelector('.fa-bars');
var cart=document.querySelector('button');
var list=document.querySelector('.list');
var btn=document.querySelector('.btnReg');
var icons=document.querySelectorAll('.icon i')
console.log(bar)
window.addEventListener("scroll",function(){
  if(window.scrollY>=register.offsetTop){
    nav.style.backgroundColor="black";
    logo.setAttribute('src','assets/img/logo_white (1).png');
    nav.style.transition='0.8s';
    bar.style.color='white';
    cart.style.color='white';
    list.style.backgroundColor='black';
    btn.style.backgroundColor='white'

    links.forEach(e=>{
       e.style.color='white' 
    })
    icons.forEach(e=>{
        e.style.color='white';
    })
    
  }
  else{
    nav.style.backgroundColor="transparent";
    logo.setAttribute('src','assets/img/logo (1).png');
    nav.style.transition='0.9s'
    links.forEach(e=>{
       e.style.color='black' 
       e.style.setProperty('--border','white')
    
    })
    cart.style.color='black';
    list.style.backgroundColor='white';
   
    bar.style.color='black'
    cart.style.color='black';
    icons.forEach(e=>{
        e.style.color='black';
        e.style.setProperty('--border','black')
    })
    
    //nav.classList.remove("navbar-scroll");
    


  }
});
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

