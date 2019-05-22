import { newBlock } from '../../../lib/newBlock';

export const Image = newBlock('img', 'image', [
    'align',
    'valign',
    'mirror',
    'fit',
    'round',
    'round-top',
    'round-right',
    'round-bottom',
    'round-left',
    'round-top-left',
    'round-top-right',
    'round-bottom-left',
    'round-bottom-right',
]);
