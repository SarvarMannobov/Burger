const burger = document.querySelector('.header-burger')
const menu = document.querySelector('.mobile-menu')

burger.addEventListener('click', function () {
    // if(menu.classList.contains('active')){
    //     menu.classList.remove('active')
    // } else {
    //     menu.classList.add('active')
    // }
    menu.classList.toggle('active')
    burger.classList.toggle('active')

})