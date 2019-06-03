import { createBlock } from 'evokit';

export const List = createBlock('ul', 'list', [
    'color',
    'divider',
    'style',
    'indent',
]);

List.Item = createBlock('li', 'list__item');
