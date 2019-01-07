import React from 'react';
import { createBlock } from '../../component';

class Box extends React.Component {
    static blockTag = 'div';
    static blockName = 'box';
    static blockMods = [
        'background',
        'border',
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
        'round',
        'round-top',
        'round-right',
        'round-bottom',
        'round-left',
        'round-top-left',
        'round-top-right',
        'round-bottom-left',
        'round-bottom-right',
        'display',
        'position',
        'place',
        'width',
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

