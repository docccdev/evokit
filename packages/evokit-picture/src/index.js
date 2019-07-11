import { createBlock } from 'evokit';

export const Picture = createBlock('picture', 'picture', [
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
    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left',
    'border-tb',
    'border-lr',
]);

export const PictureItem = createBlock('img', 'picture__item');

Picture.Item = PictureItem;
