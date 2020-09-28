import { createBlock } from 'evokit';

export const Body = createBlock('body', 'body', [
    'background',
    'color',
    'display',
    'indent',
    'overflow-anchor',
    ['overflow', [
        'overflow-x',
        'overflow-y',
    ]],
    ['width', [
        'width-min',
        'width-max',
    ]],
    // DEPRECATED
    'size',
]);

export const BodySection = createBlock('div', 'body__section', [
    'display',
    'height',
]);

Body.Section = BodySection;
