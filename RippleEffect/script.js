const button=document.querySelector(".btn")

button.addEventListener('mouseover', (event)=>{
    const xpos=event.offsetX
    const ypos=event.offsetY
    
    
    button.style.setProperty("--xpos",`${xpos}px`)
    button.style.setProperty("--ypos", `${ypos}px`)


})