import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server.js';

import { checkPerformance } from './utils.js';
import { cssModules } from './cssModules.js';

import { Box } from './Box.js';
import { Box as BoxPerf } from './Box_perf.js';

Box.defaultProps = {
    'box-preset': {
        css: cssModules,
    },
};

BoxPerf.defaultProps = {
    'box-preset': {
        css: cssModules,
    },
};

// const PROPS = { 'box-padding': 's m l xl', 'box-margin': ['s', 'm', 'xl'], 'box-border': 'none' };
// const PROPS = { 'box-padding': ['s', 'm', 'xl'], 'box-margin': ['s', 'm', 'xl'], 'box-border': 'none' };
const PROPS = {
    'box-padding': { s: true, m: true, xl: true },
    'box-margin': { s: true, m: true, xl: true },
    'box-border': 'none',
};
// const PROPS = { 'box-opacity': [20, 30, 40] };
// const PROPS = { 'box-opacity': { 0: true, 20: true, 30: true, 40: true } };
// const PROPS = { 'box-opacity': true };
// const PROPS = { 'box-padding': 's', 'box-margin': 'm', 'box-border': 'none' };

PROPS.className = 'mix1';

checkPerformance('test1 div', () => {
    return ReactDOMServer.default.renderToString(React.createElement('div', PROPS));
});

checkPerformance('test1 Box', () => {
    return ReactDOMServer.default.renderToString(React.createElement(Box, PROPS));
});

checkPerformance('test2 BoxPerf', () => {
    return ReactDOMServer.default.renderToString(React.createElement(BoxPerf, PROPS));
});
