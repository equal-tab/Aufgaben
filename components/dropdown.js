document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("settings");
    const contextMenu = document.getElementById("settingsmenu");
  
    let menuVisible = false;
  
    button.addEventListener("click", (event) => {
      event.stopPropagation(); 
  
      if (menuVisible) {
      
        contextMenu.style.display = "none";
      } else {
        
        const rect = button.getBoundingClientRect(); 
        contextMenu.style.display = "block";
        contextMenu.style.left = `${rect.left}px`;
        contextMenu.style.top = `${rect.bottom + window.scrollY}px`; 
      }
  
      menuVisible = !menuVisible;
    });
  
    document.addEventListener("click", (event) => {
      if (!contextMenu.contains(event.target) && event.target !== button) {
        contextMenu.style.display = "none";
        menuVisible = false; 
      }
    });
  });