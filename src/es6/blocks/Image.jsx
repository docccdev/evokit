import React from 'react';
import { uiKitComponent } from '../component';

@uiKitComponent
export default class Image extends React.Component {
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
