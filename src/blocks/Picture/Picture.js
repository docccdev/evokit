import React from 'react';
import { createBlock } from '../../component';

class Picture extends React.Component {
    static blockTag = 'picture';
    static blockName = 'picture';
    static blockMods = [
        'size',
        'round',
        'round-top',
        'round-right',
        'round-bottom',
        'round-left',
        'round-top-left',
        'round-top-right',
        'round-bottom-left',
        'round-bottom-right',
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

export default createBlock(Picture);
