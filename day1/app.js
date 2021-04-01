this.addEventListener("keydown",(e)=>{
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    //If you click repeatedly, the sound plays without any problems
    audio.currentTime=0;
    //add efect transition
    key.classList.add("playing");
    //remove effect transition
    key.addEventListener("transitionend",()=>{
        key.classList.remove("playing");
    })
    
    audio.play();
    
});