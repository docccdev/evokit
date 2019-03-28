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
};
