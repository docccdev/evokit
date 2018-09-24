import React from 'react';
import { createBlock } from '../component';

class PanelBody extends React.PureComponent {
    static blockTag = 'div';
    static blockName = 'panel__body';

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

export default createBlock(PanelBody);
