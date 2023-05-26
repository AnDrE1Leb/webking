const burger = document.getElementById("burger");
const shadow = document.getElementById("shadow");
const menu = document.getElementById("menu");
const menuCross = document.getElementById("menuCross");


burger.addEventListener('click', function (){
    menu.classList.add('active');
    shadow.classList.add('active');
})

menuCross.addEventListener('click', function (){
    menu.classList.remove('active');
    shadow.classList.remove('active');
})

shadow.addEventListener('click', function (){
    menu.classList.remove('active');
    socialsPopup.classList.remove('active');
    form.classList.remove('active');
    shadow.classList.remove('active');
})

const connection = document.getElementById("connection");
const socialsPopup = document.getElementById("socialsPopup");
const socialsCross = document.getElementById("socialsCross");


connection.addEventListener('click', function (){
    socialsPopup.classList.add('active');
    shadow.classList.add('active');
})

socialsCross.addEventListener('click', function (){
    socialsPopup.classList.remove('active');
    shadow.classList.remove('active');
})

const consultation = document.getElementById("consultation");
const form = document.getElementById("form");
const formCross = document.getElementById("formCross");


consultation.addEventListener('click', function (){
    form.classList.add('active');
    shadow.classList.add('active');
})

formCross.addEventListener('click', function (){
    form.classList.remove('active');
    shadow.classList.remove('active');
})



