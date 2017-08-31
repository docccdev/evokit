import React from 'react';
import { uiKitComponent } from '../component';

@uiKitComponent
export default class Line extends React.Component {
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
