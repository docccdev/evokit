import { createBlock } from 'evokit';

export const Body = createBlock('body', 'body', [
    'size',
    'indent',
    'background',
    'color',
]);

Body.Section = createBlock('div', 'body__section');
