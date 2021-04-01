
function showTime(){
    let date=new Date();
    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let day=date.getDay();
    let month=date.getMonth();
    let getDate=date.getDate();
    //add 0
    if(hour<10){
        hour="0"+hour;
    }

    if(min<10){
        min="0"+min;
    }

    if(sec<10){
        sec="0"+sec;
    }

    //transform turkish meaning of days
    day=tDay(day);

    //transform turkish meaning of month
    month=tMonth(month);

    let time="<div class='int'>"+"<span id='hourAndMin'>"+hour+":"+min+"</span>"+" "+"<span id='sec'>"+sec+"</span>"+"</div>"+
            "<div class='str'>"+getDate+" "+month+"-"+day+"</div>";

    const clock=document.querySelector(".clock");
    
    clock.innerHTML=time;

    setTimeout(showTime, 1000);
}

showTime();


function tDay(day){
    if(day==0){
        day="Pazar";
    } else if(day==1){
        day="Pazartesi";
    } else if(day==2){
        day="Salı";
    } else if(day==3){
        day="Çarşamba";
    } else if(day==4){
        day="Perşembe";
    } else if(day==5){
        day="Cuma";
    } else if(day==6){
        day="Cumartesi";
    } 

    return day;
}


function tMonth(month){
     if(month==0){
        month="Ocak";
    } else if(month==1){
        month="Şubat";
    } else if(month==2){
        month="Mart";
    } else if(month==3){
        month="Nisan";
    } else if(month==4){
        month="Mayıs";
    } else if(month==5){
        month="Haziran";
    } else if(day==6){
        month="Temmuz";
    } else if(day==7){
        month="Ağustos";
    } else if(day==8){
        month="Eylül";
    } else if(day==9){
        month="Ekim";
    } else if(day==10){
        month="Kasım";
    } else if(day==11){
        month="Aralık";
    } 

    return month;
}