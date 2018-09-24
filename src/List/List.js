import React from 'react';
import { createBlock } from '../component';

class List extends React.PureComponent {
    static blockTag = 'ul';
    static blockName = 'list';
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

export default createBlock(List);
