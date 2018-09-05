import React from 'react';
import { createBlock } from '../component';

class Body extends React.PureComponent {
    static blockName = 'body';
    static blockMods = [
        'size',
    ];

    render() {
        return (
            <body
                className={this.getClassName()}
                {...this.getCleanProps()}
            >
                {this.props.children}
            </body>
        );
    }
}

export default createBlock(Body);

