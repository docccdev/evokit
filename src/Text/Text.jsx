import React from 'react';
import { createBlock } from '../component';

class Text extends React.Component {
    static blockName = 'text';
    static blockMods = [
        'color',
        'size',
        'weight',
        'align',
        'valign',
        'wrap',
        'style',
        'transform',
    ];

    render() {
        return (
            <span
                className={this.getClassName()}
                {...this.getCleanProps()}
            >
                {this.props.children}
            </span>
        );
    }
}

export default createBlock(Text);
