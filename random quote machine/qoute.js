let quote = document.querySelector('.quote')
let person = document.querySelector('.person')
let button = document.querySelector('#btn')

const blockquote = [
    {
        quote:"The first step towards getting somewhere is to decide that you are not going to stay where you are.",
        person:"— J.P. Morgan",
          
    },
    {
        quote:'You can’t look back – you just have to put the past behind you, and find something better in your future.' ,
        person:" — Jodi Picoult",
    },
    {
        quote:'Even though you may want to move forward in your life, you may have one foot on the brakes. In order to be free, we must learn how to let go. Release the hurt. Release the fear. Refuse to entertain your old pain. The energy it takes to hang onto the past is holding you back from a new life. What is it you would let go of today?' ,
        person:" — Mary Manin Morrissey",
    },
    {
        quote:'Look at life through the windshield, not the rear-view mirror' ,
        person:"— Byrd Baggett ",
    },
    {
        quote:'Moving on is easy. It’s staying moved on that’s trickier.' ,
        person:"— Katerina Stoykova Klemer",
    },
    {
        quote:'Sometimes you have to move on without certain people. If they’re meant to be in your life, they’ll catch up.' ,
        person:"— Mandy Hale",
    },
    {
        quote:'I choose not to project my past onto my future.' ,
        person:"— Jonathan Lockwood Huie",
    },
    {
        quote:'People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar.' ,
        person:"— Thich Nhat Hanh",
    }
]
button.addEventListener('click',()=>{
    const random = Math.floor(Math.random()*blockquote.length);
quote.innerHTML = blockquote[random].quote;
person.innerHTML = blockquote[random].person
})
console.log( quote)
