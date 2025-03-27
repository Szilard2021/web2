 // Nyelvi beállítások
 const translations = {
    'hu': 'Üdvözlünk az oldalon!',
    'en': 'Welcome to the website!',
    'de': 'Willkommen auf der Webseite!',
    'fr': 'Bienvenue sur le site!',
};

// Böngésző nyelvének lekérése
const userLang = navigator.language || navigator.userLanguage; // Példa: "hu-HU"
const langCode = userLang.split('-')[0]; // Csak a nyelvkódot vesszük: "hu"

// Ha van fordítás az adott nyelvre, akkor azt használjuk, egyébként angol az alapértelmezett
document.getElementById("welcome-text").textContent = translations[langCode] || translations['en'];

document.getElementById("submitjs").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append("username", document.getElementById("username").value);

    fetch("process.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => alert("Válasz a szervertől: " + data))
    .catch(error => console.error("Hiba történt:", error));
});

 // Jobb klikk letiltása
 window.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Megakadályozza a jobb klikk menü megjelenítését
    alert("A jobb klikk tiltván van az oldalon!");
});