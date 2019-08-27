import { createBlock } from 'evokit';

export const Flex = createBlock('div', 'flex', [
    'display',
    'content',
    'items',
    'direction',
    'wrap',
]);

export const FlexItem = createBlock('div', 'flex__item', [
    'align',
    'order',
]);

Flex.Item = FlexItem;
