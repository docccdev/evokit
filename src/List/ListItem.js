import React from 'react';
import { createBlock } from '../component';

class ListItem extends React.PureComponent {
    static blockTag = 'li';
    static blockName = 'list__item';

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

export default createBlock(ListItem);
