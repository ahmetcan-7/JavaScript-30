const nav= document.querySelector("nav");
let navTop=nav.offsetTop;
let navHeight=nav.offsetHeight + 'px';

window.addEventListener("scroll",navFix);


function navFix(){
    if(window.scrollY>=navTop){
        document.body.classList.add("fixed");
         document.body.style.paddingTop = navHeight;
    }else{
        document.body.classList.remove("fixed");
        document.body.style.paddingTop = 0;
        
    }
}