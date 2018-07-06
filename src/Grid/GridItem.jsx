import React from 'react';
import { createBlock } from '../component';

class GridItem extends React.Component {
    static blockName = 'grid__item';
    static blockMods = [
        'width',
        'order',
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

export default createBlock(GridItem);
