import { createBlock } from 'evokit';

export const Grid = createBlock('div', 'grid', [
    'column',
    'indent',
    'direction',
    'align',
    'valign',
    'divider',
    'wrap',
]);

Grid.Item = createBlock('div', 'grid__item', [
    'order',
    'width',
]);
