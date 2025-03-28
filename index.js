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



document.addEventListener("DOMContentLoaded", function () {
    const contents = document.querySelectorAll(".timelineCont"); 
    const timeline = document.querySelector(".timelineWrapper");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
            } else {
                entry.target.classList.remove("visible"); 
            }
        });
    }, { threshold: 0.5 });

    contents.forEach(content => observer.observe(content));

    // Observe timeline bar separately
    const timelineObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timeline.classList.add("visible");
            } else {
                timeline.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 });

    timelineObserver.observe(timeline);
});
