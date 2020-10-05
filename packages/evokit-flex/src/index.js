import { createBlock } from 'evokit';

export const Flex = createBlock('div', 'flex', [
    'direction',
    'display',
    'height',
    'items',
    'wrap',
    ['content', [
        'content-align',
        'content-justify',
    ]],
]);

export const FlexItem = createBlock('div', 'flex__item', [
    'align',
    'display',
    'empty',
    'order',
]);

Flex.Item = FlexItem;
