import { createBlock } from 'evokit';

export const Grid = createBlock('div', 'grid', [
    'align',
    'column',
    'direction',
    'display',
    'divider',
    'valign',
    'wrap',
    ['indent', [
        'indent-x',
        'indent-y',
    ]],
]);

export const GridItem = createBlock('div', 'grid__item', [
    'display',
    'order',
    'width',
]);

Grid.Item = GridItem;
