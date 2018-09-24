import React from 'react';
import { createBlock } from '../component';

class Panel extends React.PureComponent {
    static blockTag = 'div';
    static blockName = 'panel';
    static blockMods = [
        'theme',
        'style',
        'size',
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

export default createBlock(Panel);
