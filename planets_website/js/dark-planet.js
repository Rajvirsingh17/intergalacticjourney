const planetInfo = {
    1: {
        title: "The Age of Magic",
        content: "The Dark Planet's civilization was built on the mastery of mystical arts, with its people drawing power from the planet's unique energy fields. The world was ruled by powerful wizards who governed through ancient magical traditions."
    },
    2: {
        title: "The Wizard Wars",
        content: "In the 15th century, a series of devastating wars broke out between different wizard factions, leading to the fragmentation of Dark Planet's society. The conflicts left lasting scars on the planet's landscape."
    },
    3: {
        title: "The Great Awakening",
        content: "In the 20th century, a group of visionary wizards initiated the 'Great Awakening' — a period of cultural revival that saw the restoration of ancient traditions and the establishment of a unified government under a powerful wizard council."
    },
    4: {
        title: "The Eclipse Event",
        content: "A rare celestial event called the Eclipse caused a massive surge of dark energy, granting immense magical power to the planet's inhabitants but also opening dangerous rifts between worlds."
    }
};
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const closePopupButton = document.getElementById('close-popup');
document.querySelectorAll('.info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const infoId = e.target.getAttribute('data-info');
        const planet = planetInfo[infoId];
        popupTitle.textContent = planet.title;
        popupText.textContent = planet.content;
        popup.style.display = 'flex';
    });
});
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
