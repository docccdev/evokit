import React from 'react';
import { createBlock } from '../component';

class Image extends React.Component {
    static blockTag = 'img';
    static blockName = 'image';
    static blockMods = [
        'align',
        'valign',
        'mirror',
    ];

    render() {
        return (
            React.createElement(
                this.getTagName(),
                this.getProps(),
            )
        );
    }
}

export default createBlock(Image);
