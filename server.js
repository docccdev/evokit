import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './src/dev/App';

const content = renderToString(<App />);
