document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("settings");
  const contextMenu = document.getElementById("settingsmenu");

  let menuVisible = false;

  button.addEventListener("click", (event) => {
    // Event-Listener für Klicks auf das "settings"-Button-Element.
    event.stopPropagation(); // Verhindern, dass das Klick-Ereignis die darunter liegenden Elemente erreicht.
    // Umschalten der Sichtbarkeit des Menüs basierend auf dem aktuellen Status.
    if (menuVisible) {
      contextMenu.style.display = "none";
    } else {
      const rect = button.getBoundingClientRect(); // Ermitteln der Position und Größe des button Elements im Viewport
      contextMenu.style.display = "block"; //Kontextmenü sichtbar machen, indem display none auf dusplay block gemacht wird
      contextMenu.style.left = `${rect.left}px`; // Setzen der linken Position des Kontextmenüs auf die linke Kante des Buttons.
      contextMenu.style.top = `${rect.bottom + window.scrollY}px`; // Setzen der oberen Position des Kontextmenüs direkt unterhalb des Buttons, unter Berücksichtigung des Scrollens der Seite (scrollY).
    }

    menuVisible = !menuVisible; // Ändere den Sichtbarkeitsstatus des Menüs.
  });

  
  document.addEventListener("click", (event) => {
    
    if (!contextMenu.contains(event.target) && event.target !== button) { // Überprüfen, ob das Klick-Ereignis nicht innerhalb des Menüs oder des Buttons stattfand.
      
      contextMenu.style.display = "none"; // Blenden das Menü aus und setze den Sichtbarkeitsstatus zurück.
      menuVisible = false;
    }
  });
});
