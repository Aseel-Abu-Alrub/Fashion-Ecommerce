var loginn=document.querySelector('.container');
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