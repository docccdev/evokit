import React from 'react';
import { uiKitComponent } from '../../component';

class Tags extends React.Component {
    static blockName = 'tags';
    static blockMods = [
        'theme',
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

export default uiKitComponent(Tags);
