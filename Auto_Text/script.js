const container = document.querySelector(".container")

let careers=["YouTuber","Web Developer", "AI Developer", "Full Stack Developer" ]

carrersIndex=0

characterIndex=0

updateText()

function updateText(){
    characterIndex++
    container.innerHTML=`<h1>I am ${careers[carrersIndex].slice(0,1) === "A" ? "an" : "a"} ${careers[carrersIndex].slice(0, characterIndex)}</h1>`

    if(characterIndex === careers[carrersIndex].length){
        carrersIndex++
        characterIndex=0
    }

    if(carrersIndex === careers.length){
        carrersIndex=0
    }
    setTimeout(updateText,150)

}
