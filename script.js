const musicBG = new Audio("musicBG.mp3");
const musicYay = new Audio("yay.mp3");
let turn = "X";
let gameover = false;
musicBG.volume = 0.1;


//Changes the turn
const changeTurn = () => {
    return turn === "X"?"O":"X"
}

musicIcon.addEventListener('click', () => {
    musicBG.paused ? musicBG.play() : musicBG.pause();
})

function toggle(image) {
    if (image.getAttribute('src') == "./iconmusicoff.svg") {
      image.setAttribute('src', './iconmusic.svg');
    } else {
      image.setAttribute('src', './iconmusicoff.svg');
    }
  }

//Win Checker
const winCheck = () => {
    let boxtexts = document.getElementsByClassName("text");
    let winIS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        
    ]

    winIS.forEach(e => {
        if (!gameover) {
            if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
                document.querySelector(".changer").innerText = boxtexts[e[0]].innerText + " Won";
                confetti();
                musicYay.play();
                gameover = true;
            }
        }
    })
        
}

//Logic
let boxes = document.getElementsByClassName("box");
if (!gameover) {
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.text');
        element.addEventListener('click', () => {
            if (boxtext.innerText == '') {
                boxtext.innerText = turn;
                turn = changeTurn();
                winCheck();
                if (!gameover) {
                    document.getElementsByClassName("changer")[0].innerText = "Turn for " + turn;
                }
            }
        })
    })
}

//Reset button
reset.addEventListener('click', resets)

function resets() {
    reset.addEventListener('click', () => {
        let boxtext = document.querySelectorAll('.text');
        Array.from(boxtext).forEach(element => {
            element.innerText = "";
        })
        gameover = false;
        turn = "X";
        document.getElementsByClassName("changer")[0].innerText = "Turn for " + turn;
    })
}

