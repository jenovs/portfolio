console.log('¯\\_(ツ)_/¯');
const dots = document.querySelectorAll('.dot');
const mouth = document.querySelector('.mouth');
const links = document.querySelectorAll('.link');

function smile(e) {
  mouth.classList.add('smile');
}

function unSmile(e) {
  mouth.classList.remove('smile');
}

function creep(e) {
  let { innerHeight: height, innerWidth: width } = window;
  let { pageX: x, pageY: y } = e;
  let distX = Math.round(x / width * 100);
  let distY = Math.round(y / height * 100);
  distX = distX < 80 ? distX : 80;
  distY = distY < 80 ? distY : 80;

  dots.forEach(dot => {
    dot.style.marginTop = `calc(12px + ${distY / 2}%)`;
    dot.style.marginLeft = `calc(6px + ${distX / 2}%)`;
  });
}

links.forEach(link => {
  link.addEventListener('mouseenter', smile);
  link.addEventListener('mouseleave', unSmile);
});

window.addEventListener('mousemove', creep);
