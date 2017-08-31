import React from 'react';
import { uiKitComponent } from '../component';

@uiKitComponent
export default class Link extends React.Component {
    static blockName = 'link';
    static blockMods = [
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
