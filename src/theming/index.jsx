import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeGenerator } from './ThemeGenerator';

const mainNode = document.getElementById('main');
const mountNode = mainNode.appendChild(document.createElement('div'));

ReactDOM.render(<ThemeGenerator />, mountNode);
