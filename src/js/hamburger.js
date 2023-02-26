import { hamburger, navList, closeBtn } from '../domElements.js';

export default function hamburgerEvents() {
  const handleHamClick = () => {
    closeBtn.classList.remove('hidden');
    hamburger.classList.add('hidden');
    navList.style.setProperty('visibility', 'visible');
  };

  hamburger.addEventListener('click', handleHamClick);
}

const closeEvent = () => {
  const handleCloseClick = () => {
    closeBtn.classList.add('hidden');
    hamburger.classList.remove('hidden');
    navList.style.setProperty('visibility', 'hidden');
  };

  closeBtn.addEventListener('click', handleCloseClick);
};

export { closeEvent, hamburgerEvents };
