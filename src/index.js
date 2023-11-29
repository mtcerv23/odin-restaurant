import './style.css';
import home from './home.js';
import menu from './menu.js';

home();

const content = document.getElementById('content');
const homeTab = document.getElementById('homeTab');
const menuTab = document.getElementById('menuTab');
const contactTab = document.getElementById('contactTab');

homeTab.addEventListener('click', home);
menuTab.addEventListener('click', menu);