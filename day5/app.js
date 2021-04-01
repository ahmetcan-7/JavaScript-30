const panels=document.querySelectorAll(".panel");

panels.forEach((panel)=>{
    panel.addEventListener("click",openActive);
});

function openActive(){
    
    this.classList.toggle("open-active");
}




