const clock =(function(){
    const second = document.querySelector(".move .second");
    const minute =document.querySelector(".move .minute");
    const hour =document.querySelector(".move .hour");

    const now =new Date();
    let secondDeg = now.getSeconds()*6; // every second is 6 deg
    let minuteDeg = now.getMinutes()*6; // every minute is 6 deg
    let hourDeg = (now.getHours() * 30) + (minuteDeg / 60); //every hour is 30 degree + minute fraction 


    
rotate(second, secondDeg);
rotate(minute, minuteDeg);
rotate(hour, hourDeg);

tick();
setInterval(tick, 1000);

    function tick() {
        rotate(second, secondDeg);

        secondDeg = (secondDeg +6) % 360;

        if (secondDeg === 0) {
            rotate(minute, minuteDeg);
            rotate(hour, hourDeg);

            minuteDeg =(minuteDeg +6) % 360;
            hourDeg =(hourDeg + (6/60)) % 360;
        }
    }

    function rotate(el, deg) {
        el.style.transform =`rotateZ(${deg}deg)`;
    }

    
    setInterval(function(){
        text= "Merhaba";},3000);

})();


  
