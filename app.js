let time = document.querySelector('.time'),
day = document.querySelector('.day'),
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval(getTime, 1)

function getTime() {
    let d = new Date,
     hour = d.getHours(),
     minute = d.getMinutes(),
     second = d.getSeconds(),
     currentDay = days[d.getDay()],
     date = d.getDate(),
     month = months[d.getMonth()];
     if(hour > 12) {
         if(minute < 10) {
        time.innerHTML = `${hour%12}:0${minute}`
     } else {
        time.innerHTML = `${hour%12}:${minute}`
     }
    
     } else {
        if(minute < 10) {
        time.innerHTML = `${hour}:0${minute}`
        } else {
            time.innerHTML = `${hour}:${minute}`
        }
     }
     
     day.innerHTML = `${currentDay}, ${month}  ${date}`
}