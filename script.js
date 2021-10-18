let menu = document.querySelector('.menubar')
let close = document.querySelector('.closebar')
let hamburger = document.querySelector('.navbar .navlist')

close.addEventListener('click',()=>{
    
    close.style.display='none';
    menu.style.display='block';
    hamburger.classList.remove('activenavbar');

})

menu.addEventListener('click',()=>{
   
    close.style.display='block';
    menu.style.display='none';
    hamburger.classList.toggle('activenavbar');


})