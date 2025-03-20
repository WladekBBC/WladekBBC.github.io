let yes = document.querySelector('#yes')
let survey = document.querySelector('.survey')

const random = (min,max) => {
    const rand = 10 + Math.random() * (max - min + 100);
    return Math.floor(rand)
}

let no = document.querySelector('#no')
no.addEventListener('mouseenter', () => {
    no.style.left = `${random(100,200)}%`;
    no.style.top = `${random(100,200)}%`;
})

yes.addEventListener('click', function(){
    survey.textContent = 'Verry good choice)))';
})