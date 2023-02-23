import {
  btnSpan, hamburger, navList,
} from '../domElements.js';

export default function hamburgerEvents() {
  const handleHamClick = () => {
    btnSpan.innerHTML = '<iconify-icon class="nav-btn" id="close-btn" icon="material-symbols:close-rounded"></iconify-icon>';
    navList.classList.add('visible');
    navList.style.setProperty('visibility', 'visible');
  };

  hamburger.addEventListener('click', handleHamClick);
}

const closeBtn = document.getElementById('close-btn');

const closeEvent = () => {
  const handleCloseClick = () => {
    btnSpan.innerHTML = '<iconify-icon class="nav-btn" id="ham" icon="charm:menu-hamburger"></iconify-icon>';
    // navList.classList.add('visible');
    navList.style.setProperty('visibility', 'hidden');
    alert('clickr');
  };

  closeBtn.addEventListener('click', handleCloseClick);
};

export { closeEvent, hamburgerEvents };