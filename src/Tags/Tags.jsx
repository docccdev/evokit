import React from 'react';
import { createBlock } from '../component';

class Tags extends React.PureComponent {
    static blockName = 'tags';
    static blockMods = [
        'theme',
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

export default createBlock(Tags);
