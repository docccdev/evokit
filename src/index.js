import { createBlock } from './component';
import { Example } from './utils/example';

import React from 'react';

import Box from './models/Box';
import Text from './models/Text';

import Body from './blocks/Body';
import Grid from './blocks/Grid';
import List from './blocks/List';
import Link from './blocks/Link';
import Picture from './blocks/Picture';
import Line from './blocks/Line';
import Image from './blocks/Image';

const CSSModules = (block, css) => block.css = css;


import { newBlock, withProps } from './utils';

const NewBox1 = newBlock({
    name: 'box',
    mods: [
        'padding',
        'margin'
    ],
    mix: [
        {
            name: 'text',
            mods: [
                'size',
                'weight',
            ],
        },
        {
            name: 'color',
            mods: [
                'text',
                'border',
                'background',
            ],
        },
    ]
});


const NewBox = withProps(NewBox1, { width: '100', className: 'fsdfds' });


export {
    createBlock,
    Example,
    Body,
    Box,
    Grid,
    List,
    Link,
    Picture,
    Text,
    Line,
    Image,
    CSSModules,
    NewBox,
};
