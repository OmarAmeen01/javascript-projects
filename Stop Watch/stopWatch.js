let play= document.getElementById('play')
let reset = document.getElementById('reset')
let timer =document.getElementById('timer')
let seconds = 0;
let minutes =0;
let hours = 0;
let newsec = 0
let newmin = 0
let newhour = 0
let timerstatus = 'stopped'
let timerIneterval = null
function stopwatch(){
    seconds++
    if(seconds/60===1){
        seconds =0
        minutes++
        if(minutes/60===1){
            minutes = 0
            hours++
           
        }
    }
    
    if(seconds<10){
        newsec= "0"+seconds
    }else{
        newsec= seconds
    }
    if(minutes<10){
        newmin= "0"+minutes
    }else{
        newmin= minutes
    }
    if(hours<10){
        newhour= "0"+hours
    }else{
        newhour= hours
    }
   
let display =timer.innerHTML= newhour +':'+newmin +':'+newsec 
}
// window.setInterval(stopwatch, .1)
play.addEventListener('click',function(){
   
if(timerstatus ==='stopped'){
   timerIneterval= window.setInterval(stopwatch,1000)
    play.innerHTML="pause"
    timerstatus  = "started"
}else{
 window.clearInterval(timerIneterval)
play.innerHTML = 'play' 
timerstatus= 'stopped'  
}



})
reset.addEventListener('click',function(){
  window.clearInterval(timerIneterval)
  seconds=0;
  minutes=0;
  hours=0;
  timer.innerHTML="00:00:00"  
  play.innerHTML= "play"
  timerstatus="stopped"
})