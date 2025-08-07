console.log("welcome to tic tac toe")

const ting = new Audio("audio/ting.mp3")
const gameover = new Audio("audio/gameover.mp3")

let isgameover = false
let turn = "X"

// function to change the turn
function changeTurn() {
    return turn === "X" ? "O" : "X"
}

// function to check win

function checkWin() {
    const boxtexts = document.getElementsByClassName('boxtext')
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ]

    win.forEach((e) => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '')) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " won the game 🎉"
            isgameover = true
            gameover.play()
        }
    })
}


//game logic
const box = document.querySelectorAll('.box')
box.forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target)
        const boxtext = e.target.querySelector('.boxtext')
        console.log(boxtext)
        if (boxtext.innerHTML === '') {
            boxtext.innerHTML = `${turn}`
            turn = changeTurn()
            ting.play()
            checkWin()
            if (!isgameover) {
                const info = document.querySelector(".info")
                info.innerHTML = `turn for ${turn}`
            }


        }
    })
})


// logic on reset button

const reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    const boxtexts = Array.from(document.getElementsByClassName('boxtext'))
    boxtexts.forEach((e) => {
        e.innerHTML = ''
    })
    turn="X"
    isgameover=false
    if (!isgameover) {
        const info = document.querySelector(".info")
        info.innerHTML = `turn for ${turn}`
    }


})

