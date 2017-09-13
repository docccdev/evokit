import React from 'react';
import { uiKitComponent } from '../component';

class Line extends React.Component {
    static blockName = 'line';
    static blockMods = [
        'size',
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

export default uiKitComponent(Line);
