var button = document.querySelector('.button-1')
var content = document.querySelector('.content')
var child = document.querySelector('.child')
var button2 = document.querySelector('.button-2')

function openButton(){
    content.classList.add('open')
}

function removeButton(){
    content.classList.remove('open')
}


button.addEventListener('click',openButton)

content.addEventListener('click',removeButton)

child.addEventListener('click',function(e){
    e.stopPropagation();
})

button2.addEventListener('click',removeButton)