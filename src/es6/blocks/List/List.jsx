import React from 'react';
import { uiKitComponent } from '../../component';

class List extends React.Component {
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

export default uiKitComponent(List);
