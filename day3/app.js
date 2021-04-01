const inputs=document.querySelectorAll(".controls div input");

inputs.forEach((input)=>{
    input.addEventListener("change",update);
});

inputs.forEach((input)=>{
    input.addEventListener("mousemove",update);
});


function update(){
    let suffix;

    if(this.name!="base"){
        suffix=this.dataset.sizing;
    }else{
        suffix="";
    }

    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
   
}