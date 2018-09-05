import React from 'react';
import { createBlock } from '../component';

class Image extends React.PureComponent {
    static blockName = 'image';
    static blockMods = [
        'align',
        'valign',
        'mirror',
    ];

    render() {
        return (
            <img
                className={this.getClassName()}
                {...this.getCleanProps()}
            />
        );
    }
}

export default createBlock(Image);
