import React from 'react';
import { createBlock } from '../../component';

class Text extends React.Component {
    static blockTag = 'span';
    static blockName = 'text';
    static blockMods = [
        'color',
        'size',
        'weight',
        'align',
        'valign',
        'wrap',
        'style',
        'transform',
        'lheight',
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

export default createBlock(Text);
