import { servicesBtn } from '../domElements.js';

const createCard = (cards, target) => {
  cards.forEach((card) => {
    const cardTemp = document.createElement('article');
    cardTemp.classList.add('card');
    cardTemp.innerHTML = `
      <div class="icon-cont"><img class="service-img" src=${card.icon} alt=""> </div>
      <h4 class="card-title">${card.title}</h4>
      <p class="card-desc">
        ${card.desc}
      </p>
    `;
    console.log(card.title);
    target.insertBefore(cardTemp, servicesBtn);
  });
};

export default createCard;
