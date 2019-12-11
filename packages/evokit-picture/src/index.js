import { createBlock } from 'evokit';

export const Picture = createBlock('picture', 'picture', [
    'background',
    'display',
    'fit',
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
    ['round', [
        ['round-top-left', 'round-bottom-right'],
        ['round-top-right', 'round-bottom-left'],
        'round-bottom-right',
        'round-bottom-left',
    ]],
    // DEPRECATED
    'border-lr',
    'border-tb',
    'round-bottom',
    'round-left',
    'round-right',
    'round-top',
]);

export const PictureItem = createBlock('img', 'picture__item', ['display']);

Picture.Item = PictureItem;
