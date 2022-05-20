window.addEventListener("keydown" , playSound) ;

function playSound (e) {
    // console.log(e)
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);

    if(!audio) return ;

    audio.play() ;
    audio.currentTime = 0 ;
    key.classList.add("playing")
}

function removeStyle (item) {
    item.target.classList.remove("playing")
}

const keys = document.querySelectorAll(".letter-box");

keys.forEach((item) => {
    item.addEventListener("transitionend" , removeStyle)
})