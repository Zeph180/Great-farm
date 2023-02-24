// eslint-disable-next-line import/no-extraneous-dependencies
// import _ from 'lodash';
import { aboutSecImg, servicesSec } from './domElements';
import createCard from './js/card';
import { hamburgerEvents, closeEvent } from './js/hamburger';
import './style.css';
import services from './js/services';

createCard(services, servicesSec);
hamburgerEvents();
closeEvent();
