import { createBlock } from 'evokit';

export const Body = createBlock('body', 'body', [
    'background',
    'color',
    'display',
    'indent',
    'size',
    ['overflow', [
        'overflow-x',
        'overflow-y',
    ]],
]);

export const BodySection = createBlock('div', 'body__section', ['display']);

Body.Section = BodySection;
