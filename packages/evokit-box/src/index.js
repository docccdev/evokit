// 3.2.0-beta.1
import { createBlock } from 'evokit';

export const Box = createBlock('div', 'box', [
    'align',
    'background',
    'display',
    'height',
    'opacity',
    'width',
    ['position', [
        'position',
        'place',
        'zindex',
    ]],
    ['border', [
        'border-color',
        'border-width',
        'border-style',
    ]],
    ['border-top', [
        'border-color-top',
        'border-width-top',
        'border-style-top',
    ]],
    ['border-right', [
        'border-color-right',
        'border-width-right',
        'border-style-right',
    ]],
    ['border-bottom', [
        'border-color-bottom',
        'border-width-bottom',
        'border-style-bottom',
    ]],
    ['border-left', [
        'border-color-left',
        'border-width-left',
        'border-style-left',
    ]],
    ['border-color', [
        ['border-color-top', 'border-color-bottom'],
        ['border-color-right', 'border-color-left'],
        'border-color-bottom',
        'border-color-left',
    ]],
    ['border-width', [
        ['border-width-top', 'border-width-bottom'],
        ['border-width-right', 'border-width-left'],
        'border-width-bottom',
        'border-width-left',
    ]],
    ['border-style', [
        ['border-style-top', 'border-style-bottom'],
        ['border-style-right', 'border-style-left'],
        'border-style-bottom',
        'border-style-left',
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
