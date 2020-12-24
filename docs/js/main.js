const toggleMenu = document.querySelector('.toggle-menu');//иконка гамбургер
const mobMenu = document.querySelector('.mobile-menu');//иконка меню
const overlay = document.querySelector('#overlay');//overlay
const bodyEl = document.body;//body-scroll

//прослушиваем событие клик по гамбургеру
toggleMenu.addEventListener('click', function(){
    this.classList.toggle('active');
    mobMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    bodyEl.classList.toggle('noscroll');
});

//прослушиваеи событие клик моб меню
mobMenu.addEventListener('click',function(){
    this.classList.remove('active');
    toggleMenu.classList.remove('active');
    overlay.classList.remove('active');
    bodyEl.classList.remove('noscroll')
});

//прослушиваеи событие клик overlay
overlay.addEventListener('click',function(){
    this.classList.remove('active');
    toggleMenu.classList.remove('active');
    mobMenu.classList.remove('active');
    bodyEl.classList.remove('noscroll')
})
