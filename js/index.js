function greeting() {
    const greeting = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let message;

    if (currentHour < 12) {
        message = "Good Morning, Explorer!";
    } else if (currentHour < 18) {
        message = "Good Afternoon, Voyager!";
    } else {
        message = "Good Evening, Stargazer!";
    }
    greeting.textContent = message;
}
function hoverbuttons() {
    const planetLinks = document.querySelectorAll('.planet-link');
    planetLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = "scale(1.1)";
            link.style.backgroundColor = "#ff9900";
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = "scale(1)";
            link.style.backgroundColor = "#00ccff";
        });
    });
}
window.onload = () => {
    greeting();
    hoverbuttons();
};
