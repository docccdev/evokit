import { createBlock } from 'evokit';

export const Body = createBlock('body', 'body', [
    'background',
    'color',
    'display',
    'indent',
    'size',
]);

export const BodySection = createBlock('div', 'body__section', ['display']);

Body.Section = BodySection;
