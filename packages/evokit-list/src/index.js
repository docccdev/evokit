import { createBlock } from 'evokit';

export const List = createBlock('ul', 'list', [
    'color',
    'divider',
    'style',
    'indent',
]);

export const ListItem = createBlock('li', 'list__item');

List.Item = ListItem;
