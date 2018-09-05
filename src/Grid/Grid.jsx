import React from 'react';
import { createBlock } from '../component';

class Grid extends React.PureComponent {
    static blockName = 'grid';
    static blockMods = [
        'column',
        'size',
        'direction',
        'align',
        'valign',
        'theme',
        'wrap',
    ];

    render() {
        return (
            <div
                className={this.getClassName()}
                {...this.getCleanProps()}
            >
                {this.props.children}
            </div>
        );
    }
}

export default createBlock(Grid);
