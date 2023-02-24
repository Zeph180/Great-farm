// eslint-disable-next-line import/no-extraneous-dependencies
// import _ from 'lodash';
import { aboutSecImg } from './domElements';
import { hamburgerEvents, closeEvent } from './js/hamburger';
import './style.css';

hamburgerEvents();
closeEvent();

aboutSecImg.innerHTML = `<p>hello gxyrthsyutx</p>`;