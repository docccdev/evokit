import { createBlock } from 'evokit';

export const List = createBlock('ul', 'list', [
    'color',
    'display',
    'divider',
    'indent',
    'style',
]);

export const ListItem = createBlock('li', 'list__item', ['display']);

List.Item = ListItem;
