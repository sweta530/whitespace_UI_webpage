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

function togglePanel(i) {
    let panel = document.querySelector('.panel-' + i);
    let img = document.querySelector('.plus-btn-' +i);
    let panelStyle = window.getComputedStyle(panel);

    if (panelStyle.display === "none") {
        panel.style.display = 'block';
        img.src = "assets/Remove Circle.svg";
    } else {
        panel.style.display = 'none';
        img.src = "assets/Add Circle.svg";
    }
}

