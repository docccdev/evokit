import React from 'react';
import { createBlock } from '../../component';

class Image extends React.Component {
    static blockTag = 'img';
    static blockName = 'image';
    static blockMods = [
        'align',
        'valign',
        'mirror',
        'fit',
        'round',
        'round-top',
        'round-right',
        'round-bottom',
        'round-left',
        'round-top-left',
        'round-top-right',
        'round-bottom-left',
        'round-bottom-right',
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
