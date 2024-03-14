let input = document.getElementById('text')
let add = document.getElementById('add')
let listsec = document.getElementById('added')
let newArr= []

add.addEventListener('click',function(){
    if(input.value===""){}
    else{ 
        //task varaibles
        let taskStatus = 'pending' 
    // div conatiner
  
    listsec.style.display= "block"
    let div = document.createElement('div')
    div.classList.add('container')
    listsec.appendChild(div)

//input value
    let p = document.createElement('p')
    p.innerText = input.value 
    div.appendChild(p)

    //button container
    
    let btnc = document.createElement('div')
    btnc.setAttribute('id','btnc')
    div.appendChild(btnc)
    // checkbox
let checkbox = document.createElement("input")
checkbox.setAttribute('type','checkbox')
btnc.appendChild(checkbox)
checkbox.classList.add('checked')

    //delete button
    let del = document.createElement('button')
    del.innerText= "delete"
    del.classList.add('delete')
 btnc.appendChild(del)
newArr.push(div)
//checkbox event listener
checkbox.addEventListener('click',function(){
    if(taskStatus==='pending'){
    p.style.textDecorationLine='line-through'
    p.style.textDecorationColor = 'red'
taskStatus='done'
}else{
    p.style.textDecorationLine='none'
    taskStatus= 'pending'
}
})

del.addEventListener('click',function(){
 div.remove() 
newArr.pop()
 if(newArr.length===0){
    listsec.style.display= "none" 

}else{
    listsec.style.display= 'block'
}
})


}  
})
