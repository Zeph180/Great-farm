const createCard = (cards, target, styles, btn) => {
  cards.forEach((card) => {
    const cardTemp = document.createElement('article');
    cardTemp.classList.add(styles.container);
    cardTemp.innerHTML = `
      <div class=${styles.illustration}><img class="service-img" src=${card.icon} alt=""> </div>
      <h4 class="card-title">${card.title}</h4>
      <p class="card-desc">
        ${card.desc}
      </p>
    `;
    target.insertBefore(cardTemp, btn);
  });
};
export default createCard;
