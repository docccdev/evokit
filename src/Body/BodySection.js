import React from 'react';
import { createBlock } from '../component';

class BodySection extends React.PureComponent {
    static blockTag = 'div';
    static blockName = 'body__section';

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

export default createBlock(BodySection);
