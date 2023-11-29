export default function contact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact');
    contactInfo.textContent = "do NOT try to contact me.";

    content.appendChild(contactInfo);
}