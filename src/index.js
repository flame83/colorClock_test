import React from 'react';
import ReactDom from 'react-dom';
//import './css/main.css';
import './css/main.scss';
import ColoredClock from './js/clock/ColoredClock';






ReactDom.render(
    <ColoredClock />, document.getElementById('root')
);


module.hot.accept();