import { createBlock } from 'evokit';

export const Body = createBlock('body', 'body', [
    'size',
    'indent',
    'background',
    'color',
]);

export const BodySection = createBlock('div', 'body__section');

Body.Section = BodySection;
