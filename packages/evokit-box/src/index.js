import { createBlock } from 'evokit';

export const Box = createBlock('div', 'box', [
    'align',
    'background',
    'border',
    'border-bottom',
    'border-left',
    'border-lr',
    'border-right',
    'border-tb',
    'border-top',
    'display',
    'height',
    'place',
    'position',
    'width',
    ['margin', [
        ['margin-top', 'margin-bottom'],
        ['margin-right', 'margin-left'],
        'margin-bottom',
        'margin-left',
    ]],
    ['overflow', [
        'overflow-x',
        'overflow-y',
    ]],
    ['padding', [
        ['padding-top', 'padding-bottom'],
        ['padding-right', 'padding-left'],
        'padding-bottom',
        'padding-left',
    ]],
    ['round', [
        ['round-top-left', 'round-bottom-right'],
        ['round-top-right', 'round-bottom-left'],
        'round-bottom-right',
        'round-bottom-left',
    ]],
    // DEPRECATED
    'margin-lr',
    'margin-tb',
    'padding-lr',
    'padding-tb',
    'round-bottom',
    'round-left',
    'round-right',
    'round-top',
]);
