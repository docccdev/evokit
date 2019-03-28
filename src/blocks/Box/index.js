import React from 'react';
import { createBlock } from '../../component';
import { boxMods } from './mods';

class Box extends React.Component {
    static blockTag = 'div';
    static blockName = 'box';
    static blockMods = boxMods;

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

