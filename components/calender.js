const openModalButtons = document.querySelectorAll('[data-modal-target]') // Sammelt alle Elemente, die das Attribut 'data-modal-target' haben.
const closeModalButtons = document.querySelectorAll('[data-close-button]') // Sammelt alle Elemente, die das Attribut 'data-close-button' haben.


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget) // Findet das zu öffnende Modal basierend auf dem data-modal-target-Attribut.
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal') // Findet das nächstgelegene Modal-Element, das diesen Button enthält.
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
}

const draggableElement = document.getElementById('modal');

draggableElement.addEventListener('mousedown', (event) => { //fügt einen Event Listener für das Drücken der Maustaste hinzu, um das Element verschieben zu können
  // Berechnet die Startposition der Maus relativ zur oberen linken Ecke des Elements.
  const startX = event.clientX - draggableElement.offsetLeft;
  const startY = event.clientY - draggableElement.offsetTop;

  // Funktion zum Bewegen des Elements
  const moveElement = (event) => {
    draggableElement.style.left = event.clientX - startX + 'px';
    draggableElement.style.top = event.clientY - startY + 'px';
  };

 // Fügt einen Event-Listener für das Bewegen der Maus hinzu.
 document.addEventListener('mousemove', moveElement);

 // Fügt einen Event-Listener für das Loslassen der Maustaste hinzu, um das Bewegen zu beenden.
 document.addEventListener('mouseup', () => {
   document.removeEventListener('mousemove', moveElement);
  });
});



