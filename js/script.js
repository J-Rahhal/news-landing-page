const menu_open = document.getElementById('menu_icon');
const mobile_menu = document.getElementById('mobile_menu');
const menu_close = document.getElementById('close');

menu_open.addEventListener('click', ()=>{
    mobile_menu.classList.add('open');
});

menu_close.addEventListener('click',()=>{
    mobile_menu.classList.remove('open');
});
