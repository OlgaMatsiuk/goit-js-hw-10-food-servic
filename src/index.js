import './styles.css';
import { onSavedTheme, themeSwitchCheckboxRef, onSwichChange } from './js/theme-switch';
import menuItemTpl from './templates/menu-item.hbs';
import menuItems from './menu.json'


onSavedTheme();

themeSwitchCheckboxRef.addEventListener('change', onSwichChange);


const menuContainer = document.querySelector('.js-menu');
const menuItemsMarkup = createMenuItemsMarkup(menuItems);

menuContainer.insertAdjacentHTML("beforeend", menuItemsMarkup)

function createMenuItemsMarkup(menuItems) {
    return menuItems.map(menuItemTpl).join('');
}
