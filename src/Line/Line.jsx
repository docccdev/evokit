import React from 'react';
import { createBlock } from '../component';

class Line extends React.PureComponent {
    static blockName = 'line';
    static blockMods = [
        'size',
        'style',
        'color',
    ];

    render() {
        return (
            <hr
                className={this.getClassName()}
                {...this.getCleanProps()}
            />
        );
    }
}

export default createBlock(Line);
