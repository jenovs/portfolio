import './creep';

import './scss/index.scss';
console.log('¯\\_(ツ)_/¯');

const wrapper = document.querySelector('.wrapper');
const hero = document.querySelector('.hero');
const cv = document.querySelector('.hero__resume');

const cvOffset = hero.offsetHeight - cv.offsetTop;

const handleScroll = e => {
  const scrolled = hero.getBoundingClientRect().bottom - cvOffset;
};

window.addEventListener('scroll', handleScroll);
