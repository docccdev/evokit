import React from 'react';
import { createBlock } from '../component';

class Grid extends React.PureComponent {
    static blockTag = 'div';
    static blockName = 'grid';
    static blockMods = [
        'column',
        'size',
        'direction',
        'align',
        'valign',
        'theme',
        'wrap',
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

export default createBlock(Grid);
