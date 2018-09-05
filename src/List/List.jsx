import React from 'react';
import { createBlock } from '../component';

class List extends React.PureComponent {
    static blockName = 'list';
    static blockMods = [
        'theme',
        'style',
        'size',
    ];

    render() {
        return (
            <ul
                className={this.getClassName()}
                {...this.getCleanProps()}
            >
                {this.props.children}
            </ul>
        );
    }
}

export default createBlock(List);
