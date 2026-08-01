window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>40){

nav.classList.add("scrolled");

}

else{

nav.classList.remove("scrolled");

}

});