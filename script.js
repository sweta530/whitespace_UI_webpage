let stars = document.getElementsByClassName("star");

function rating(n) {
    remove();
    for (let i = 0; i < n; i++) {
        stars[i].className = "star star-checked";
    }
}
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}

function hamburgerMenu() {
    const checkbox = document.getElementById('checkbox_toggle');
    const menu = document.getElementById('menu');
    if (checkbox.checked) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

