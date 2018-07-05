import React from 'react';
import { createBlock } from '../component';

class Line extends React.Component {
    static blockName = 'line';
    static blockMods = [
        'size',
        'style',
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
