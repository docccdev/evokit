import { newBlock } from '../../utils';

export const Picture = newBlock('picture', 'picture', [
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

Picture.Item = newBlock('img', 'picture__item');
