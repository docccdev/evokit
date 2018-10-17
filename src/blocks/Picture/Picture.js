import React from 'react';
import { createBlock } from '../../component';

class Picture extends React.Component {
    static blockTag = 'div';
    static blockName = 'picture';
    static blockMods = [
        'size',
        'style',
    ];

    render() {
        return (
            React.createElement(
                this.getTagName(),
                {
                    className: this.getClassName(),
                },
                React.createElement(
                    'img',
                    Object.assign(this.getCleanProps(), {
                        className: this.getElementClassName('item'),
                    }),
                ),
            )
        );
    }
}

export default createBlock(Picture);
