'use strict';
import 'nodelist-foreach-polyfill';

import paralax from './modules/paralax';
import changeNavbar from './modules/navbar';

window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('mousemove', paralax)
    document.addEventListener('touch')
    changeNavbar('.navbar')
})

