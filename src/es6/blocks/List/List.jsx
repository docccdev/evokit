import React from 'react';
import { uiKitComponent } from '../../component';

@uiKitComponent
export default class List extends React.Component {
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
