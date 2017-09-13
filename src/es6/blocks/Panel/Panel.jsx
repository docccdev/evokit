import React from 'react';
import { uiKitComponent } from '../../component';

class Panel extends React.Component {
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

export default uiKitComponent(Panel);
