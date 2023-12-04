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

const ITERATION = 200000;
// const ITERATION = 1000;
// const PROPS = { 'box-padding': 's m l xl', 'box-margin': ['s', 'm', 'xl'], border: 'none' };
// const PROPS = { 'box-padding': ['s', 'm', 'xl'], 'box-margin': ['s', 'm', 'xl'], border: 'none' };
const PROPS = {
    'box-padding': { s: true, m: true, xl: true },
    'box-margin': { s: true, m: true, xl: true },
    border: 'none',
};
// const PROPS = { 'box-opacity': [20, 30, 40] };
// const PROPS = { 'box-opacity': { 0: true, 20: true, 30: true, 40: true } };
// const PROPS = { 'box-opacity': true };
// const PROPS = { 'box-padding': 's', 'box-margin': 'm', border: 'none' };

checkPerformance('test1', ITERATION, () => {
    return ReactDOMServer.default.renderToString(React.createElement(Box, PROPS));
});

checkPerformance('test1', ITERATION, () => {
    return ReactDOMServer.default.renderToString(React.createElement(BoxPerf, PROPS));
});
