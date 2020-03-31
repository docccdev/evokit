import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const mainNode = document.getElementById('main');
const mountNode = mainNode.appendChild(document.createElement('div'));

ReactDOM.render(<App />, mountNode);
