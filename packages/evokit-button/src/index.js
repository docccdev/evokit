import { createBlock } from 'evokit';

export const Button = createBlock('button', 'button', [
    'display',
    'events',
    'height',
    'size',
    'theme',
    'valign',
    'weight',
    'width',
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
]);
