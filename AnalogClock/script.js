function clock (){
    let date = new Date()
    let hrs = date.getHours()
    let mints =date.getMinutes()
    let secd = date.getSeconds()

    let hrotation = 30*hrs + mints/2
    let mrotation = 6*mints
    let srotation = 6*secd
    
    
    const hours=document.getElementById('hours')
    const minutes= document.getElementById('minutes')
    const seconds = document.getElementById('seconds')


    hours.style.transform = `rotate(${hrotation}deg)`
    minutes.style.transform =`rotate(${mrotation}deg)`
    seconds.style.transform =`rotate(${srotation}deg)`


}

setInterval(clock, 1000)









// setInterval(,1000)