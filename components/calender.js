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

document.addEventListener("DOMContentLoaded", () => {
  let draggableElem = document.getElementById("modal");
  let initialX = 0, initialY = 0;
  let offsetX = 0, offsetY = 0;
  let moveElement = false;


  let events = {
    mouse: {
      down: "mousedown",
      move: "mousemove",
      up: "mouseup",
    },
    touch: {
      down: "touchstart",
      move: "touchmove",
      up: "touchend",
    },
  };


  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const deviceType = isTouchDevice ? 'touch' : 'mouse';

  const startDrag = (e) => {
    e.preventDefault();
    
    initialX = isTouchDevice ? e.touches[0].clientX : e.clientX;
    initialY = isTouchDevice ? e.touches[0].clientY : e.clientY;

  
    const transform = window.getComputedStyle(draggableElem).transform;
    if (transform !== 'none') {
      const matrix = new WebKitCSSMatrix(transform);
      offsetX = matrix.m41;
      offsetY = matrix.m42;
    } else {
      offsetX = 0;
      offsetY = 0;
    }

    moveElement = true;
  };

  const drag = (e) => {
    if (moveElement) {
      e.preventDefault();
  
      let currentX = isTouchDevice ? e.touches[0].clientX : e.clientX;
      let currentY = isTouchDevice ? e.touches[0].clientY : e.clientY;
  
    
      let deltaX = currentX - initialX;
      let deltaY = currentY - initialY;
  
     
      requestAnimationFrame(() => {
        draggableElem.style.transform = `translate(${offsetX + deltaX}px, ${offsetY + deltaY}px)`;
      });
    }
  };

  const stopDrag = () => {
    moveElement = false;
  };


  draggableElem.addEventListener(events[deviceType].down, startDrag);
  document.addEventListener(events[deviceType].move, drag);
  document.addEventListener(events[deviceType].up, stopDrag);
});
