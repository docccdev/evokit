import React from 'react';
import { uiKitComponent } from '../component';

class Box extends React.Component {
    static blockName = 'box';
    static blockMods = [
        'theme',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'margin-tb',
        'margin-lr',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'padding-tb',
        'padding-lr',
        'display',
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

export default uiKitComponent(Box);

