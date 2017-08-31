import React from 'react';
import { uiKitComponent } from '../../component';

@uiKitComponent
export default class Panel extends React.Component {
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
