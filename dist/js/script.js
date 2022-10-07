//hamburger


const ham = document.querySelector('#ham');
const navMenu = document.querySelector('#nav-menu');
ham.addEventListener('click',function(){
    ham.classList.toggle('ham-active');
    navMenu.classList.toggle('hidden');
});

//navbar
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.pageYOffset > fixednav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

window.addEventListener('click',function(e){
    if(e.target != ham && e.target != navMenu) {
        ham.classList.remove('ham-active');
    navMenu.classList.add('hidden');
    }
});

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});