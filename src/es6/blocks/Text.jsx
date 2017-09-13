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
            <div
                className={this.getClassName()}
                {...this.getCleanProps()}
            >
                {this.props.children}
            </div>
        );
    }
}

export default uiKitComponent(Text);
