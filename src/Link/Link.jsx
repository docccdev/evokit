import React from 'react';
import { createBlock } from '../component';

class Link extends React.PureComponent {
    static blockName = 'link';
    static blockMods = [
        'color',
        'size',
        'weight',
        'style',
    ];

    render() {
        return (
            <a
                className={this.getClassName()}
                {...this.getCleanProps()}
            >
                {this.props.children}
            </a>
        );
    }
}

export default createBlock(Link);
