const ham=document.querySelector('.hamburgmenu');

const navmenu=document.querySelector('#navmenu');
const closebtn=document.querySelector('.closebtn');



ham.addEventListener('click',()=>{
    navmenu.style.transform='translateX(0)'
})

navmenu.addEventListener('click',()=>{


})

closebtn.addEventListener('click',()=>{
    navmenu.style.transform='translateX(100%)'
})