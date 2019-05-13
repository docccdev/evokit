import { newBlock } from '../../lib/newBlock';

export const List = newBlock('ul', 'list', [
    'color',
    'divider',
    'style',
    'indent',
]);

List.Item = newBlock('li', 'list__item');
