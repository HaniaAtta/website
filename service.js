const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('mousemove', (e) => {
    const rect = icon.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    let rotateY = 0;
    let rotateX = 0;

    // Top-left
    if (x < width / 2 && y < height / 2) {
      rotateY = -30;
      rotateX = -20;
    }
    // Top-right
    else if (x > width / 2 && y < height / 2) {
      rotateY = 30;
      rotateX = -20;
    }
    // Bottom-left
    else if (x < width / 2 && y > height / 2) {
      rotateY = -30;
      rotateX = 20;
    }
    // Bottom-right
    else {
      rotateY = 30;
      rotateX = 20;
    }

    icon.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.1)`;
  });

  icon.addEventListener('mouseleave', () => {
    icon.style.transform = '';
  });
});