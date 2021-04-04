const triggers=document.querySelectorAll(".hero__item");


triggers.forEach((trigger)=>{
    trigger.addEventListener("mouseenter",handleEnter);
});

triggers.forEach((trigger)=>{
    trigger.addEventListener("mouseleave",handleLeave);
});


function handleEnter(){
    this.classList.add("trigger-enter");
    setTimeout(() => {
        this.classList.add("trigger-enter-active");
    }, 150);

    console.log(this);
}

function handleLeave(){
    this.classList.remove("trigger-enter","trigger-enter-active");

}


