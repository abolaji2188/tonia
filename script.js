 function createConfetti() {
  const confettiContainer = document.getElementById('confetti');
  const colors = ['#FFC700', '#FF3D00', '#FFEA00', '#00B0FF', '#00FF00'];

  setInterval(() => {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '0px'; 

      confettiContainer.appendChild(confetti);

      
      const fallDuration = Math.random() * 3 + 2; 
      confetti.animate([
          { transform: 'translateY(0)' },
          { transform: `translateY(${window.innerHeight}px)` }
      ], {
          duration: fallDuration * 1000,
          easing: 'linear',
          fill: 'forwards'
      });

  
      setTimeout(() => confetti.remove(), fallDuration * 1000);
  }, 300);
}

createConfetti();

function showFireworks() {
  const colors = ['#daa520', 'ffd700'];
  
  setInterval(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      confetti({
          particleCount: 50,
          startVelocity: 30,
          spread: 360,
          origin: { x: x / window.innerWidth, y: y / window.innerHeight - 0.2 },
          colors: [colors[Math.floor(Math.random() * colors.length)]],
      });
  }, 1000); 
}

showFireworks();

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("birthdayModal");
  const openButton = document.querySelector("button[onclick='openModal()']");
  const closeButton = modal.querySelector(".close-btn");

  if (modal && openButton && closeButton) {
    openButton.addEventListener("click", () => {
      modal.classList.add("active");
    });

    closeButton.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("active");
      }
    });
  } else {
    console.error("Modal or buttons not found!");
  }
});

