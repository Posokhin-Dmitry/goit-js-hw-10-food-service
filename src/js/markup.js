import menuData from '../menu.json';
import menuTemplate from '../templates/menu.hbs';

const menuRef = document.querySelector('.js-menu');

const menuItemsMarkup = menuTemplate(menuData);

menuRef.innerHTML = menuItemsMarkup;
