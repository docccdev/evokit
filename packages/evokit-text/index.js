import { newBlock } from '../../lib/newBlock';

export const Text = newBlock('span', 'text', [
    'color',
    'size',
    'weight',
    'align',
    'valign',
    'wrap',
    'style',
    'transform',
    'lheight',
]);
