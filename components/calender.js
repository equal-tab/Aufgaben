const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
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

draggableElement.addEventListener('mousedown', (event) => {
  
  const startX = event.clientX - draggableElement.offsetLeft;
  const startY = event.clientY - draggableElement.offsetTop;

  // Funktion zum Bewegen des Elements
  const moveElement = (event) => {
    draggableElement.style.left = event.clientX - startX + 'px';
    draggableElement.style.top = event.clientY - startY + 'px';
  };

  document.addEventListener('mousemove', moveElement);

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', moveElement);
  });
});



