
document.getElementById("add").addEventListener("click", newToDo)
function newToDo(){
    let add = document.getElementById("add");
    let input = document.getElementById("input");
    let newToDo = document.createElement("div");

    newToDo.textContent = input.value;
    document.getElementById("main").appendChild(newToDo);
    input.value = "";
}
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('more');
    const contextMenu = document.getElementById('moreMenu');

    // Variable, um den Zustand des Menüs zu verfolgen
    let menuVisible = false;

    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Verhindert die Eventweiterleitung

        if (menuVisible) {
            // Menü verstecken, wenn es sichtbar ist
            contextMenu.style.display = 'none';
        } else {
            // Menü anzeigen und an einer festen Position relativ zum Button positionieren
            const rect = button.getBoundingClientRect(); // Button Position und Größe
            contextMenu.style.display = 'block';
            contextMenu.style.left = `${rect.left}px`;
            contextMenu.style.top = `${rect.bottom + window.scrollY}px`; // Position unterhalb des Buttons
        }

        // Sichtbarkeitsstatus umkehren
        menuVisible = !menuVisible;
    });

    // Klick außerhalb des Menüs schließt es wieder
    document.addEventListener('click', (event) => {
        if (!contextMenu.contains(event.target) && event.target !== button) {
            contextMenu.style.display = 'none';
            menuVisible = false; // Zustand aktualisieren
        }
    });
});