export default function menu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const giantText = document.createElement('div');
    giantText.classList.add('giant');
    giantText.textContent = "THIS TEXT IS FUCKING GINORMOUS";

    content.appendChild(giantText);
}