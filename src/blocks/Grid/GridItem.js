import React from 'react';
import { createBlock } from '../../component';

class GridItem extends React.Component {
    static blockTag = 'div';
    static blockName = 'grid__item';
    static blockMods = [
        'width',
        'order',
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

export default createBlock(GridItem);
