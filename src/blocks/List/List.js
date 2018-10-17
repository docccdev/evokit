import React from 'react';
import { createBlock } from '../../component';

class List extends React.Component {
    static blockTag = 'ul';
    static blockName = 'list';
    static blockMods = [
        'color',
        'divider',
        'style',
        'indent',
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
