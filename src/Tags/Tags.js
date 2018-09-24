import React from 'react';
import { createBlock } from '../component';

class Tags extends React.PureComponent {
    static blockTag = 'ul';
    static blockName = 'tags';
    static blockMods = [
        'theme',
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

export default createBlock(Tags);
