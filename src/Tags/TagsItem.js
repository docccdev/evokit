import React from 'react';
import { createBlock } from '../component';

class TagsItem extends React.Component {
    static blockTag = 'li';
    static blockName = 'tags__item';
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

export default createBlock(TagsItem);
