import React from 'react';
import { uiKitComponent } from '../../component';

@uiKitComponent
export default class Grid extends React.Component {
    static blockName = 'grid';
    static blockMods = [
        'column',
        'size',
        'direction',
        'align',
        'valign',
        'theme',
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
