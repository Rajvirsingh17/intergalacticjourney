const planetInfo = {
    1: {
        title: "The Rise of Light",
        content: "This planet is known for its advanced technology, clean energy systems, and flourishing democratic society. Over centuries, it overcame its natural resource crisis and became a beacon of progress in the galaxy."
    },
    2: {
        title: "A Great Reformation",
        content: "A revolution in the 18th century redefined the political structure of Light Planet, transitioning from monarchic rule to a direct democratic system with widespread participation."
    },
    3: {
        title: "The Beacon Project",
        content: "Light Planet's most ambitious project, the Beacon Project, aimed to illuminate distant parts of the galaxy with a network of massive energy towers, signaling its progress to nearby star systems."
    },
    4: {
        title: "The Unity Accords",
        content: "The Light Planet formed the Unity Accords with neighboring star systems, forging a collective of planets dedicated to peace, sustainable development, and mutual defense."
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
