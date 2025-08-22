const colContainer = Array.from(document.getElementsByClassName("color-container"))

colContainer.forEach( (box)=>{
    box.style.backgroundColor= (randomColorGen())
    box.innerText=randomColorGen()

})

function randomColorGen(){
    let red= Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue=Math.floor(Math.random()*256)
    let alpha = Math.random().toFixed(1)
    return `rgba(${red}, ${green}, ${blue}, ${alpha})` 
}



