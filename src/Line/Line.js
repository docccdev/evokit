import React from 'react';
import { createBlock } from '../component';

class Line extends React.PureComponent {
    static blockTag = 'hr';
    static blockName = 'line';
    static blockMods = [
        'size',
        'style',
        'color',
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

export default createBlock(Line);
