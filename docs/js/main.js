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
});
// Подключение точек пагинации справа page-nav
$('#page-nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function () {},
    end: function () {},
    scrollChange: function ($currentListItem) {}
});
//отображение/скрытие карточек проектов по загрузке страницы
    if($(window).width() <1200){
        $('.project-card.hide-card').hide();
        $('.show-project-cards').on('click', function(){
            $('.project-card.hide-card').fadeIn();
            $(this).hide();
        })
    }
    else{
        $('.project-card.hide-card').fadeIn();
        $('.show-project-cards').hide();
    }
	//отображение/скрытие карточек проектов при ресайзе страницы
    $(window).on('resize', function(){
    if($(window).width() <1200){
        $('.project-card.hide-card').hide();
        $('.show-project-cards').fadeIn();
        $('.show-project-cards').on('click', function(){
            $('.project-card.hide-card').fadeIn();
            $(this).css('display', 'none');
        });
    }
    else{
        $('.project-card.hide-card').fadeIn();
        $('.show-project-cards').hide();
    }
});
//показать кнопку скролл вверх
    $('#backtop').hide();

    $(window).scroll(function(){

        if( $(this).scrollTop() > 300 ){
            
            $('#backtop').fadeIn();
        }
        else{
            $('#backtop').fadeOut();
        }
});









