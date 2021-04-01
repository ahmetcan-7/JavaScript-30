const checkboxes=document.querySelectorAll(".inbox input[type='checkbox']");


checkboxes.forEach(checkbox=>checkbox.addEventListener("click",handleCheck));

let lastCheck;
let firstindex;
let lastindex;
function handleCheck(e){
    let inBetween=false;
    //its controling at least click once
    if(lastCheck!=null){

    
    if(e.shiftKey&&this.checked){
        checkboxes.forEach(item=>{
            if(item===this||item===lastCheck){
                inBetween=!inBetween;
            }

            if(inBetween){
                item.checked=true;
            }
        })
    }

}

    lastCheck=this;
}