import './style.css';

const name = document.querySelector('name');
const newElement = document.createElement('div');
newElement.innerHTML = 'test';
newElement.classList.add('name');
name.append(newElement);

console.log("test");