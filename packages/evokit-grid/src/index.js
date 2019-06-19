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

export const GridItem = createBlock('div', 'grid__item', [
    'order',
    'width',
]);

Grid.Item = GridItem;
