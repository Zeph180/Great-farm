// eslint-disable-next-line import/no-extraneous-dependencies
// import _ from 'lodash';
import {
  servicesBtn, servicesSec, whyUs, whyUsBtn,
} from './domElements.js';
import createCard from './js/card.js';
import { hamburgerEvents, closeEvent } from './js/hamburger.js';
import './style.css';
import { reasons, services } from './js/services.js';

const serviceStyle = {
  container: 'card',
  illustration: 'icon-cont',
};

const reasonsClasses = {
  container: 'reason-cont',
  illustration: 'reason-img-cont',
};

createCard(services, servicesSec, serviceStyle, servicesBtn);
createCard(reasons, whyUs, reasonsClasses, whyUsBtn);
hamburgerEvents();
closeEvent();
