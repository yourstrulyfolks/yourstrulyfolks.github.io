// subtle breathing effect on icons
const icons = document.querySelectorAll('.icon-row i');

icons.forEach((icon, index) => {
  icon.animate(
    [
      { transform: 'scale(1)', opacity: 0.7 },
      { transform: 'scale(1.15)', opacity: 1 },
      { transform: 'scale(1)', opacity: 0.7 }
    ],
    {
      duration: 3000,
      delay: index * 400,
      iterations: Infinity
    }
  );
});
