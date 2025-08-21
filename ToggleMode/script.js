const input=document.querySelector("input")
const body = document.querySelector("body")

input.checked=JSON.parse(localStorage.getItem("mode"))

updateBody()

function updateBody(){
    if(input.checked){
        body.style.backgroundColor="black"
    }else{
        body.style.backgroundColor="white"
    }
}

input.addEventListener('input', ()=>{
    updateBody()
    updatelocalstorage()
})

function updatelocalstorage(){
    localStorage.setItem("mode", JSON.stringify(input.checked))
}