import { newBlock } from '../../../lib/newBlock';

export const Body = newBlock('body', 'body', [
    'size',
    'indent',
    'background',
    'color',
]);

Body.Section = newBlock('div', 'body__section');
