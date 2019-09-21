import { createBlock } from 'evokit';

export const Box = createBlock('div', 'box', [
    'align',
    'background',
    'display',
    'height',
    'place',
    'position',
    'width',
    ['border', [
        'border-color', 
        'border-width', 
        'border-style',
    ]],
    ['border-top', [
        'border-top-color', 
        'border-top-width', 
        'border-top-style',
    ]],
    ['border-right', [
        'border-right-color', 
        'border-right-width', 
        'border-right-style',
    ]],
    ['border-bottom', [ 
        'border-bottom-color', 
        'border-bottom-width', 
        'border-bottom-style',
    ]],
    ['border-left', [
        'border-left-color', 
        'border-left-width', 
        'border-left-style',
    ]],
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
    'border-lr',
    'border-tb',
]);
