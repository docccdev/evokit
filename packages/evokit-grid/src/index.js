import { createBlock } from 'evokit';

export const Grid = createBlock('div', 'grid', [
    'align',
    'column',
    'direction',
    'display',
    'divider',
    'divider-column',
    'height',
    'valign',
    'wrap',
    ['divider-indent', [
        'divider-indent-x',
        'divider-indent-y',
    ]],
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
