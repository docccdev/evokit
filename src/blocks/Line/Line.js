import React from 'react';
import { createBlock } from '../../component';

class Line extends React.Component {
    static blockTag = 'hr';
    static blockName = 'line';
    static blockMods = [
        'indent',
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
