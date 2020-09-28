
// particlesJS.load('particles-js', './particles.json', function () {
//   console.log('callback - particles-js config loaded');
// });

const move = () => {
  const elem = document.getElementById('myBar');
  let width = 1;
  const id = setInterval(() => {
    if (width >= 100) {
      width = 0;
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }, 30);
};

move();
