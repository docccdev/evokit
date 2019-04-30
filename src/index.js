import { createBlock } from './component';
import { Example } from './utils/example';

import React from 'react';

import { Box } from './blocks/Box';

import Text from './blocks/Text';

import Body from './blocks/Body';
import Grid from './blocks/Grid';
import List from './blocks/List';
import Link from './blocks/Link';
import Picture from './blocks/Picture';
import Line from './blocks/Line';
import Image from './blocks/Image';

const CSSModules = (block, css) => block.css = css;

import { newBlock2 } from './utils/newBlock';


let NewBox;
let NewText;

const NewColor = newBlock2({
    name: 'color',
    tag: 'font',
    preset: {
        b: 'ek-',
    },
    mods: [
        'border',
        'background',
        'text',
    ],
});

NewText = newBlock2({
    name: 'text',
    tag: 'span',
    preset: {
        b: 'ek-',
    },
    mods: [
        'align',
        'size',
    ],
    mix: [NewColor],
});

NewBox = newBlock2({
    name: 'box',
    tag: 'div',
    preset: {
        b: 'ek-',
    },
    mods: [
        'margin',
    ],
    mix: [NewText, NewColor],
});

export {
    createBlock,
    Example,
    Body,
    Box,
    NewBox,
    NewText,
    NewColor,
    Grid,
    List,
    Link,
    Picture,
    Text,
    Line,
    Image,
    CSSModules,
};
