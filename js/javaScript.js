
let target = document.getElementById("container");


setInterval(()=>{
    let time = new Date();
    let day_nigth = "";
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let secounds = time.getSeconds();
    
    if (hours > 12) {
        hours = hours - 12;
        day_nigth = "PM";
    }
    if (hours < 10) {
        hours = "0"+ hours;
        day_nigth = "AM";
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (secounds < 10) {
        secounds = "0" + secounds;
    }

    target.innerHTML = hours + ":" + minutes + ":" + secounds + " " + day_nigth ;

})
