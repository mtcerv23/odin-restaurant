export default function menu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menu = document.createElement('div');
    menu.classList.add('giant');
    menu.textContent = "burger: $20. fries: $50. drink: nope.";

    content.appendChild(menu);
}