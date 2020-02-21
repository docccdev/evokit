import { createBlock } from 'evokit';

export const Button = createBlock('button', 'button', [
    'display',
    'height',
    'theme',
    'width',
    'weight',
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
