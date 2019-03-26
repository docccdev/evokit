import React from 'react';
import { createBlock } from '../../component';
import { textMods } from './mods';

class Text extends React.Component {
    static blockTag = 'span';
    static blockName = 'text';
    static blockMods = textMods;

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