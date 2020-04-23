var menuButton = document.querySelector('#menu')
var backdrop = document.querySelector('.backdrop');
var menu = document.querySelector('.container');

function openMenu()
{
    backdrop.style.display = 'block';
    menu.style.display = 'block';
}

function closeMenu()
{
    backdrop.style.display = 'none';
    menu.style.display = 'none';
}

menuButton.onclick = openMenu;
backdrop.onclick = closeMenu;