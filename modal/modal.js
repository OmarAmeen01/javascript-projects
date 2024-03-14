let btn = document.getElementById('btn')
let close = document.getElementById("close")
let main = document.getElementById('main')

btn.addEventListener('click',()=>{
    main.style.display ="flex"

})

close.addEventListener('click',()=>{
main.style.display = "none"

})
window.addEventListener('click',(e)=>{
    if(e.target===main)
    {
        main.style.display = "none"
    }
})
