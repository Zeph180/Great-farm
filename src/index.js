// eslint-disable-next-line import/no-extraneous-dependencies
// import _ from 'lodash';
import { aboutSecImg, servicesBtn, servicesSec, whyUs, whyUsBtn } from './domElements';
import createCard from './js/card';
import { hamburgerEvents, closeEvent } from './js/hamburger';
import './style.css';
import { reasons, services } from './js/services';

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
