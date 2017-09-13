import React from 'react';
import { uiKitComponent } from '../component';

class Image extends React.Component {
    static blockName = 'image';
    static blockMods = [
        'align',
        'valign',
    ];

    render() {
        return (
            <img
                className={this.getClassName()}
                {...this.getCleanProps()}
            />
        );
    }
}

export default uiKitComponent(Image);
