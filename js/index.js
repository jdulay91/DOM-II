// Your code goes here
//target element
const header = document.querySelector('header');
 const navTags = document.querySelectorAll('.nav-link');
//change background color


// //mouseover
// header.addEventListener('mouseover',function(){
//     header.style.backgroundColor ="#A8DADC"
// })

// //keydown

// document.addEventListener('keydown',function(){
//     header.style.backgroundColor = "#F0F3BD";
// })

// // wheel

// document.addEventListener('wheel',function(){
//     header.style.backgroundColor = "#C6DABF"
// })

// //click


// for(let i=0 ; i<navTags.length; i++){
//     navTags[i].addEventListener('click',function(){      
//         header.style.backgroundColor='green';
        
//     })
// }
//prevent event
// navTags[0].addEventListener('click',function(e){ 
//     e.preventDefault();
//     header.style.backgroundColor='green';    
// })

//PREVENT EVENT PROPAGATION

// function eventPropagation (e){ 
//   header.style.backgroundColor="black";
//   e.stopPropagation();
// }
// header.addEventListener('click',function(){
//     header.style.backgroundColor="green";
// })
// navTags.forEach(navTag => navTag.addEventListener('click',eventPropagation,false))

// //dblclick
// for(let i=0 ; i<navTags.length; i++){
//     navTags[i].addEventListener('dblclick',function(){
       
//         header.style.backgroundColor='pink';
//     })
// }

// //loading
// window.addEventListener('load', function(){
//     header.style.backgroundColor = "gray";
// });

// //mousedown
// window.addEventListener('mousedown',function(){
//     header.style.backgroundColor = "blue";
// })

// //mouseup
// window.addEventListener('mouseup',function(){
//     header.style.backgroundColor = "red";
// })
// //scroll
// window.addEventListener('scroll',function(){
//     header.style.backgroundColor = "#FFE1A8";
// })
// //mouseleave
// header.addEventListener('mouseleave',function(){
//     header.style.backgroundColor = "#5BC0BE";
// })