const open_menu = document.getElementById('menu');
const mobile_menu = document.getElementById('hamburger-links');
const close_menu = document.getElementById('close_icon');

open_menu.addEventListener('click', () =>{
    mobile_menu.style.display = 'block';
    close_menu.style.display = 'block';
    mobile_menu.classList.add('open');
});

close_menu.addEventListener('click', () =>{
    mobile_menu.classList.remove('open');
    mobile_menu.style.display ='none';
    close_menu.style.display='none';
});
