import React from 'react';
import { createBlock } from '../component';

class Link extends React.Component {
    static blockTag = 'a';
    static blockName = 'link';
    static blockMods = [
        'color',
        'size',
        'weight',
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

export default createBlock(Link);
