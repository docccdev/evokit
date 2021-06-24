import { createBlock } from 'evokit';

export const Image = createBlock('img', 'image', [
    'align',
    'alt',
    'background',
    'border',
    'border-bottom',
    'border-left',
    'border-lr',
    'border-right',
    'border-tb',
    'border-top',
    'display',
    'fit',
    'height',
    'mirror',
    'valign',
    'width',
    ['round', [
        ['round-top-left', 'round-bottom-right'],
        ['round-top-right', 'round-bottom-left'],
        'round-bottom-right',
        'round-bottom-left',
    ]],
    // DEPRECATED
    'round-bottom',
    'round-left',
    'round-right',
    'round-top',
]);
