const set =document.getElementById('set')
set.addEventListener("click",(e)=>{
pressTheKeys(e.target.innerHTML)
makeAnime(e.target.innerHTML)

})

document.addEventListener("keydown",(e)=>{
    pressTheKeys(e.key);
    makeAnime(e.key)
    
})

function pressTheKeys(key){
    switch (key){
        case "w":
    
    const wDrum = new Audio("./sounds/tom-1.mp3");
    wDrum.play()
        break;
        case "a":
            const aDrum = new Audio("./sounds/tom-2.mp3");
            aDrum.play()
    
        break;
        case "s":
            const sDrum = new Audio("./sounds/tom-3.mp3");
            sDrum.play()
    
        break;
    
        case "d":
            const dDrum = new Audio("./sounds/tom-4.mp3");
            dDrum.play()
    
        break;
        case "j":
            const jDrum = new Audio("./sounds/snare.mp3");
            jDrum.play()
    
        break;
        case "k":
            const kDrum = new Audio("./sounds/kick-bass.mp3");
            kDrum.play()
    
        break;
        case "l":
            const lDrum = new Audio("./sounds/crash.mp3");
            lDrum.play()
    
        break;
    }

       
        
}
function makeAnime(target){
    const aniTar= document.querySelector("."+target)
    const allDrums =document.querySelectorAll('.drum')
    
        aniTar.classList.add("pressed")
    setTimeout(()=>{
        aniTar.classList.remove("pressed")
    },100)
}