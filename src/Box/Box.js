import React from 'react';
import { createBlock } from '../component';

class Box extends React.Component {
    static blockTag = 'div';
    static blockName = 'box';
    static blockMods = [
        'theme',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'margin-tb',
        'margin-lr',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'padding-tb',
        'padding-lr',
        'display',
        'position',
        'place',
        'style',
    ];

    render() {
        return (
            React.createElement(
                this.getTagName(),
                this.getProps(),
                this.props.children,
            )
        );
    }
}

export default createBlock(Box);

