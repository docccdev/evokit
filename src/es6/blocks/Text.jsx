import React from 'react';
import { uiKitComponent } from '../component';

class Text extends React.Component {
    static blockName = 'text';
    static blockMods = [
        'color',
        'size',
        'weight',
        'align',
        'valign',
        'wrap',
        'style',
    ];

    render() {
        return (
            <span
                className={this.getClassName()}
                {...this.getCleanProps()}
            >
                {this.props.children}
            </span>
        );
    }
}

export default uiKitComponent(Text);
