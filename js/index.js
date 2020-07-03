// Your code goes here
//target element
const header = document.querySelector('header');

//change background color


//mouseover
header.addEventListener('mouseover',function(){
    header.style.backgroundColor ="#A8DADC"
})

//keydown

document.addEventListener('keydown',function(){
    header.style.backgroundColor = "#F0F3BD";
})

// wheel

document.addEventListener('wheel',function(){
    header.style.backgroundColor = "#C6DABF"
})

// for (let i=0 ; i<navTags.length; i++){
//     navTags[i].preventDefault();
// }
// // drag
// const draggableImage = document.querySelector('.container .intro img')
// draggableImage.addEventListener('drag',function() {
// }, false);
const navTags = document.querySelectorAll('.nav-link');

for(let i=0 ; i<navTags.length; i++){
    navTags[i].addEventListener('click',function(){
         navTags.preventDefault();
        header.style.backgroundColor='green';
    })
}

//dblclick
for(let i=0 ; i<navTags.length; i++){
    navTags[i].addEventListener('dblclick',function(){
       
        header.style.backgroundColor='pink';
    })
}

//loading
window.addEventListener('load', function(){
    header.style.backgroundColor = "gray";
});

//mousedown
window.addEventListener('mousedown',function(){
    header.style.backgroundColor = "blue";
})

//mouseup
window.addEventListener('mouseup',function(){
    header.style.backgroundColor = "red";
})
//scroll
window.addEventListener('scroll',function(){
    header.style.backgroundColor = "#FFE1A8";
})
//mouseleave
header.addEventListener('mouseleave',function(){
    header.style.backgroundColor = "#5BC0BE";
})