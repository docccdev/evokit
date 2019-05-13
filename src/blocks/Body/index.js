import { newBlock } from '../../utils';

export const Body = newBlock('body', 'body', [
    'size',
    'indent',
    'background',
    'color',
]);

Body.Section = newBlock('div', 'body__section');
