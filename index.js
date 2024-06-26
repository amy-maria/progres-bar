const progress = document.getElementById('progress');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextbtn.addEventListener('click', () => {
  currentActive++;
  //Do not allow increment to go beyond numberof circles//
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateBar();
});
prevbtn.addEventListener('click', () => {
  currentActive--;
  //don't allow current active to be less than 1//
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateBar();
});

function updateBar() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  //light up lines between circles//

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  if (currentActive === 1) {
    prevbtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextbtn.disabled = true;
  } else {
    prevbtn.disabled = false;
    nextbtn.disabled = false;
  }
}
