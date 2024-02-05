function showTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`;
    clock.textContent = time;
}

const clock = document.getElementById('clock');
setInterval(showTime, 1000);

showTime();


 

 
