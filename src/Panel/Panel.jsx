import React from 'react';
import { createBlock } from '../component';

class Panel extends React.PureComponent {
    static blockName = 'panel';
    static blockMods = [
        'theme',
        'style',
        'size',
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

export default createBlock(Panel);
