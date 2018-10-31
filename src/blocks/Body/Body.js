import React from 'react';
import { createBlock } from '../../component';

class Body extends React.Component {
    static blockTag = 'body';
    static blockName = 'body';
    static blockMods = [
        'size',
        'indent',
        'background',
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

export default createBlock(Body);

