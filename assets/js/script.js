const menu = document.querySelector(".fa-bars");
const close = document.getElementById("close");

const nav = document.querySelector("nav ul");
const fa = document.querySelector(".bars");


menu.addEventListener("click", () => {
    nav.classList.toggle("active");    
    fa.className = nav.classList.contains("active") ? "fa fa-times" : "fa fa-bars";
    console.log(nav.classList.contains("active"));
});

close.addEventListener("click", ()=>{
    nav.classList.remove("active");
})