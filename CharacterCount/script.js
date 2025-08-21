const textArea=document.getElementById("text-area")
const TotalCounter=document.getElementById("total-counter")
const remainingCounter=document.getElementById("remaining-counter")

updateCounter()

textArea.addEventListener('keyup', ()=>{
    updateCounter()
})


function updateCounter(){
    TotalCounter.innerText=(textArea.value).length
    remainingCounter.innerText=textArea.getAttribute("maxlength") - ((textArea.value).length)
}