import React from 'react';
import { uiKitComponent } from '../component';

class Link extends React.Component {
    static blockName = 'link';
    static blockMods = [
        'color',
        'size',
        'weight',
        'style',
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

export default uiKitComponent(Link);
