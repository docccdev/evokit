import { newBlock } from '../../lib/newBlock';

export const Grid = newBlock('div', 'grid', [
    'column',
    'indent',
    'direction',
    'align',
    'valign',
    'divider',
    'wrap',
]);

Grid.Item = newBlock('div', 'grid__item', [
    'order',
    'width',
]);
