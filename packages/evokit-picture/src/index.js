import { createBlock } from 'evokit';

export const Picture = createBlock('picture', 'picture', [
    'border',
    'border-bottom',
    'border-left',
    'border-lr',
    'border-right',
    'border-tb',
    'border-top',
    'display',
    'fit',
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

export const PictureItem = createBlock('img', 'picture__item', ['display']);

Picture.Item = PictureItem;
