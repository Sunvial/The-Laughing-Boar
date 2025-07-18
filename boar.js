function changeTextColor() {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.style.color = '#9c352a';
    }
}

document.addEventListener('DOMContentLoaded', changeTextColor);
