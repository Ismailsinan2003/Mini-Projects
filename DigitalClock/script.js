const hour = document.querySelector(".hour")
const minutes = document.querySelector(".Minutes")
const seconds = document.querySelector(".Seconds")


function updateTime(){

    let date = new Date()
    hour.innerText=date.getHours()
    minutes.innerText= date.getMinutes()
    seconds.innerText=date.getSeconds() 
}

updateTime()

setInterval(updateTime, 1000)