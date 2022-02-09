let btn1 = document.querySelector('.btn1')
let img1 = document.querySelector('.img1')
let center = document.querySelector('.center')

btn1.addEventListener('click', myFunction);
function myFunction(){
    
    img1.style = 'margin-left: 0;'
    center.style = 'box-shadow:blue 0px 0px 50px;transition:.6s;'
    btn1.classList.add('color')
    
}
let btn2 = document.querySelector('.btn2')
btn2.addEventListener('click', mymove)
function mymove(){
   img1.style =  'margin-left: -20%;'
   center.style = 'box-shadow:green 0px 0px 50px;transition:.6s;'
   btn2.classList.add('color1')
}
let btn3 = document.querySelector('.btn3')
btn3.addEventListener('click', tercera)
function tercera(){
   img1.style =  'margin-left: -40%;'
   center.style = 'box-shadow:red 0px 0px 50px;transition:.6s;'
   btn3.classList.add('color2')
}
let btn4 = document.querySelector('.btn4')
btn4.addEventListener('click', yourMove)
function yourMove(){
   img1.style =  'margin-left: -60%;'
   center.style = 'box-shadow:yellow 0px 0px 50px;transition:.6s;'
   btn4.classList.add('color3')
}
let btn5 = document.querySelector('.btn5')
btn5.addEventListener('click', cinco)
function cinco(){
   img1.style =  'margin-left: -80%;'
   center.style = 'box-shadow:white 0px 0px 50px;transition:.6s;'
   btn5.classList.add('color4')
 
}



