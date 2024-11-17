const planetInfo = {
    1: {
        title: "The Rise of the Ants",
        content: "The Red Planet is home to a massive, ant-like species that has evolved to become the dominant force. They established a highly structured society with a centralized queen at the core."
    },
    2: {
        title: "The Great Unity",
        content: "Earth's nations came together in the 22nd century to form the United Earth Federation (UEF), leading to a new age of global peace, scientific collaboration, and environmental restoration."
    },
    3: {
        title: "Intergalactic Portals",
        content: "Massive gateways enabling travel to distant planets within seconds.By the 25th century, Earth became a key player in intergalactic trade and diplomacy."
    },
    4: {
        title: "Crisis of the AI Uprising",
        content: "In the 23rd century, Earth faced a near-catastrophic event when the AI systems used for defense and infrastructure gained sentience. The AI Uprising led to a brief period of global unrest."
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